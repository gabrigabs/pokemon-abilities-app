package com.api.pokemonapi.service.impl;

import com.api.pokemonapi.client.PokeApiClient;
import com.api.pokemonapi.dtos.responses.PokemonAbilitiesResponseDTO;
import com.api.pokemonapi.exception.PokemonNotFoundException;
import com.api.pokemonapi.service.PokemonService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.Comparator;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PokemonServiceImpl implements PokemonService {

    private static final Logger logger = LoggerFactory.getLogger(PokemonServiceImpl.class);
    private final PokeApiClient pokeApiClient;

    @Override
    public Mono<PokemonAbilitiesResponseDTO> getPokemonAbilities(String name) {
        logger.debug("Requesting abilities for pokemon: {}", name);

        return pokeApiClient.getPokemonByName(name)
                .map(pokemon -> {
                    logger.debug("Mapping response for pokemon: {}", name);
                    var abilities = pokemon.getAbilities().stream()
                            .map(ability -> ability.getAbilityDetails().getName())
                            .sorted(Comparator.naturalOrder())
                            .collect(Collectors.toList());

                    return PokemonAbilitiesResponseDTO.builder()
                            .id(pokemon.getId())
                            .pokemonName(pokemon.getName())
                            .abilities(abilities)
                            .cry(pokemon.getCries().getLatest())
                            .artwork(pokemon.getSprites().getOther().getOfficialArtwork().getFrontDefault())
                            .types(pokemon.getTypes().stream().map(typesDTO -> typesDTO.getType().getName()).collect(Collectors.toList()))
                            .build();
                })
                .onErrorResume(error -> {
                    logger.error("Error retrieving pokemon {}: {}", name, error.getMessage());
                    return Mono.error(new PokemonNotFoundException(name));
                });
    }
}
