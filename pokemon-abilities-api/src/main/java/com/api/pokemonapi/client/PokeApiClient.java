package com.api.pokemonapi.client;
import com.api.pokemonapi.dtos.responses.PokemonDTO;

import reactor.core.publisher.Mono;

public interface PokeApiClient {
    Mono<PokemonDTO> getPokemonByName(String name);
}