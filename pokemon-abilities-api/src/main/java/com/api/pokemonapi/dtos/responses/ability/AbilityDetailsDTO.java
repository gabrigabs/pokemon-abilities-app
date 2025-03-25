package com.api.pokemonapi.dtos.responses.ability;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AbilityDetailsDTO {
    private String name;
    private String url;
}