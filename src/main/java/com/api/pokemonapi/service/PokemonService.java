package com.api.pokemonapi.service;

import com.api.pokemonapi.dtos.responses.PokemonAbilitiesResponseDTO;
import reactor.core.publisher.Mono;

public interface PokemonService {
    Mono<PokemonAbilitiesResponseDTO> getPokemonAbilities(String name);
}