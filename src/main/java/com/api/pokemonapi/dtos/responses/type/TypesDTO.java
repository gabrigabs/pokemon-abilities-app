package com.api.pokemonapi.dtos.responses.type;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TypesDTO {
    private Long slot;
    private TypeDTO type;
}
