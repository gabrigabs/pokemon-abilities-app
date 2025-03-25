"use client"
import { useState, useRef } from 'react';
import { PokemonAbilitiesResponse } from './types/pokemon-types';
import { getPokemonAbilities } from './services/pokemon-api-service';



export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState<PokemonAbilitiesResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const searchPokemon = async () => {
    if (!searchTerm.trim()) return;
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await getPokemonAbilities(searchTerm);
      setPokemonData(response);
    } catch (err: any) {
      setError('Pokémon not found! Check the spelling and try again.');
      setPokemonData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchPokemon();
    }
  };

  return (
    <div className="min-h-screen bg-[#8bac0f] font-mono text-[#0f380f]">
      <audio ref={audioRef} className="hidden" />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">
            Pokémon Ability Searcher
          </h1>
        </div>

        <div className="max-w-md mx-auto mb-12 border-4 border-[#0f380f] bg-[#9bbc0f] p-4">
          <div className="relative flex flex-col">
            <p className="mb-2 font-bold">ENTER NAME:</p>
            <div className="flex">
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type here..."
                className="flex-grow px-3 py-2 border-2 border-[#0f380f]"
              />
              <button
                onClick={searchPokemon}
                disabled={isLoading}
                className="px-4 ml-2 bg-[#0f380f] text-[#9bbc0f] font-bold"
              >
                {isLoading ? '...' : 'GO!'}
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="max-w-md mx-auto border-4 border-[#0f380f] bg-[#9bbc0f] p-4 mb-8">
            <p className="font-bold text-center">! ERROR !</p>
            <p className="text-center">{error}</p>
          </div>
        )}

        {pokemonData && (
          <div className="max-w-3xl mx-auto border-4 border-[#0f380f] bg-[#9bbc0f] p-4">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-4 bg-[#e0f8d0] border-4 border-[#0f380f]">
                <img 
                  src={pokemonData.artwork} 
                  alt={pokemonData.pokemonName}
                  className="w-full h-auto" 
                />
              </div>
              <div className="md:w-1/2 p-4">
                <h2 className="text-xl font-bold uppercase">{pokemonData.pokemonName}</h2>
                <div className="mt-4">
                  <h3 className="font-bold">Abilities:</h3>
                  <ul>
                    {pokemonData.abilities.map(ability => (
                      <li key={ability}>{ability}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}