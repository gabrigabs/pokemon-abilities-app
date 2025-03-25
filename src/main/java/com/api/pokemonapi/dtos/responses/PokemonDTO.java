package com.api.pokemonapi.dtos.responses;

import java.util.List;

import com.api.pokemonapi.dtos.responses.ability.AbilityDTO;
import com.api.pokemonapi.dtos.responses.cry.CriesDTO;
import com.api.pokemonapi.dtos.responses.sprite.SpritesDTO;
import com.api.pokemonapi.dtos.responses.type.TypesDTO;
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
    private List<TypesDTO> types;
    private SpritesDTO sprites;
    private CriesDTO cries;
}