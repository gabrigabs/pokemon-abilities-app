package com.api.pokemonapi.dtos.responses;

import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PokemonAbilitiesResponseDTO {

    private String pokemonName;
    private List<String> abilities;
}
