package com.api.pokemonapi.controller;

import com.api.pokemonapi.dtos.responses.PokemonAbilitiesResponseDTO;
import com.api.pokemonapi.service.PokemonService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin
@RequestMapping("/api/pokemon")
@RequiredArgsConstructor
public class PokemonController {

    private static final Logger logger = LoggerFactory.getLogger(PokemonController.class);
    private final PokemonService pokemonService;

    @GetMapping("/{name}")
    public Mono<ResponseEntity<PokemonAbilitiesResponseDTO>> getPokemonAbilities(@PathVariable String name) {
        logger.info("Fetching abilities for pokemon: {}", name);
        return pokemonService.getPokemonAbilities(name)
                .map(response -> {
                    logger.info("Successfully retrieved abilities for pokemon: {}", name);
                    return ResponseEntity.ok(response);
                })
                .doOnError(error -> logger.error("Error fetching abilities for pokemon: {}", name, error));
    }
}