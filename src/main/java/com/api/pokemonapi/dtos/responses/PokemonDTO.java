package com.api.pokemonapi.dtos.responses;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PokemonDTO {

    private Long id;
    private String name;
    private List<AbilityDTO> abilities;
}