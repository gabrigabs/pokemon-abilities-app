package com.api.pokemonapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class PokemonNotFoundException extends RuntimeException {

    public PokemonNotFoundException(String pokemonName) {
        super("Pokémon " + pokemonName  + " not found");
    }
}