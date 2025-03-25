package com.api.pokemonapi.controller;

import com.api.pokemonapi.dtos.responses.PokemonAbilitiesResponseDTO;
import com.api.pokemonapi.service.PokemonService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/pokemon")
@RequiredArgsConstructor
public class PokemonController {

    private final PokemonService pokemonService;

    @GetMapping("/{name}")
    public Mono<ResponseEntity<PokemonAbilitiesResponseDTO>> getPokemonAbilities(@PathVariable String name) {
        return pokemonService.getPokemonAbilities(name)
                .map(ResponseEntity::ok);
    }
}