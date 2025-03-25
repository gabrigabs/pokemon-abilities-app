package com.api.pokemonapi.config;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Value("${pokeapi.base-url}")
    private String POKE_API_BASE_URL;


    @Bean
    public WebClient webClient() {
        return WebClient.builder()
                .baseUrl(POKE_API_BASE_URL)
                .build();
    }
}