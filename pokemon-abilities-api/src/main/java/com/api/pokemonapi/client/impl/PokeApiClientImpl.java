package com.api.pokemonapi.client.impl;

import com.api.pokemonapi.client.PokeApiClient;
import com.api.pokemonapi.dtos.responses.PokemonDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Component
@RequiredArgsConstructor
public class PokeApiClientImpl implements PokeApiClient {

    private static final String POKEMON_ENDPOINT = "/pokemon/{name}";

    private final WebClient webClient;

    @Override
    public Mono<PokemonDTO> getPokemonByName(String name) {
        return webClient.get()
                .uri(POKEMON_ENDPOINT, name.toLowerCase())
                .retrieve()
                .bodyToMono(PokemonDTO.class);
    }
}