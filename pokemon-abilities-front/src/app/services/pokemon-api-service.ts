import { PokemonAbilitiesResponse } from "../types/pokemon-types";

export async function getPokemonAbilities(name: string): Promise<PokemonAbilitiesResponse> {
    const response = await fetch(`http://localhost:8080/api/pokemon/${name.toLowerCase()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if(!response.ok){
        if (response.status === 404) {
            throw new Error("Pokemon not found");
        } else {
            throw new Error("An error occurred while fetching the data");
        }
    }

  
    return await response.json();
  }