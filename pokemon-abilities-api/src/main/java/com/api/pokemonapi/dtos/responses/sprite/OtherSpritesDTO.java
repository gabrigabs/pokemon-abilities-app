package com.api.pokemonapi.dtos.responses.sprite;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OtherSpritesDTO {
    @JsonProperty("official-artwork")
    private OfficialArtworkDTO officialArtwork; // Note the underscore to match API structure
}