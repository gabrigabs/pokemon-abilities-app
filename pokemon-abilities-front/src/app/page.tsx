"use client"
import { useState, useEffect, useRef } from 'react';
import { getPokemonAbilities } from './services/pokemon-api-service';
import { PokemonAbilitiesResponse } from './types/pokemon-types';


type TypeColors = {
  [key: string]: string;
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonData, setPokemonData] = useState<PokemonAbilitiesResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const typeColors: TypeColors = {
    normal: 'bg-[#A8A878]',
    fire: 'bg-[#F08030]',
    water: 'bg-[#6890F0]',
    electric: 'bg-[#F8D030]',
    grass: 'bg-[#78C850]',
    ice: 'bg-[#98D8D8]',
    fighting: 'bg-[#C03028]',
    poison: 'bg-[#A040A0]',
    ground: 'bg-[#E0C068]',
    flying: 'bg-[#A890F0]',
    psychic: 'bg-[#F85888]',
    bug: 'bg-[#A8B820]',
    rock: 'bg-[#B8A038]',
    ghost: 'bg-[#705898]',
    dragon: 'bg-[#7038F8]',
    dark: 'bg-[#705848]',
    steel: 'bg-[#B8B8D0]',
    fairy: 'bg-[#EE99AC]',
  };

  const searchPokemon = async () => {
    if (!searchTerm.trim()) return;
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await getPokemonAbilities(searchTerm);
      if (response) {
        setPokemonData(response);
        const foundSound = new Audio(response.cry);
        foundSound.volume = 0.3;
        foundSound.play().catch(e => console.error('Audio playback failed:', e));
      } else {
        setPokemonData(null);
      }
    } catch (err: Error | any) {
      if(err.message === 'Pokemon not found') {
        setError('Pokémon not found! Check the spelling and try again.');
      } else {
        setError('An error occurred while fetching the data. Please try again.');
      }
      setPokemonData(null);
    } finally {
      setIsLoading(false);
    }
  };

  const playCry = () => {
    if (pokemonData?.cry && audioRef.current) {
      audioRef.current.src = pokemonData.cry;
      audioRef.current.play().catch(e => console.error('Audio playback failed:', e));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      searchPokemon();
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#8bac0f] font-mono text-[#0f380f] relative">
      <audio ref={audioRef} className="hidden" />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2 pixel-text text-[#0f380f] transform hover:scale-105 transition-transform
                         shadow-[4px_4px_0px_#306230] bg-[#9bbc0f] inline-block px-4 py-2 rounded">
            Pokémon Ability Searcher
          </h1>
        </div>

        <div className="max-w-md mx-auto mb-12 retro-border-medium rounded-lg bg-[#9bbc0f] p-4 retro-shadow">
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
                className="flex-grow px-3 py-2 focus:outline-none text-[#0f380f] bg-[#e0f8d0] 
                          shadow-[inset_2px_2px_0px_#306230] uppercase placeholder-[#306230]"
              />
              <button
                onClick={searchPokemon}
                disabled={isLoading}
                className={`px-4 ml-2 bg-[#0f380f] text-[#9bbc0f] font-bold transition-all duration-300 
                          shadow-[2px_2px_0px_#306230] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
                          ${isLoading ? 'opacity-70' : 'hover:bg-[#306230]'}`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <span className="animate-pulse">...</span>
                  </span>
                ) : (
                  'GO!'
                )}
              </button>
            </div>
            <div className="flex justify-between mt-4">
              <div className="w-6 h-6 rounded-full bg-[#ff0000] border-2 border-[#0f380f] shadow-inner"></div>
              <div className="grid grid-cols-2 gap-1">
                <div className="w-3 h-1 bg-[#0f380f]"></div>
                <div className="w-3 h-1 bg-[#0f380f]"></div>
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div className="max-w-md mx-auto border-4 border-[#0f380f] bg-[#9bbc0f] p-4 mb-8 animate-pulse">
            <p className="font-bold text-center">! ERROR !</p>
            <p className="text-center">{error}</p>
          </div>
        )}

        {pokemonData && (
          <div className="max-w-3xl mx-auto retro-border-medium bg-[#9bbc0f] rounded-lg retro-shadow overflow-hidden">
            <div className="md:flex">
            <div className="md:w-1/2 p-6 flex flex-col items-center justify-center relative bg-[#e0f8d0] border-r-4 border-[#0f380f]"> 
              <div className="absolute top-2 left-2 text-[#0f380f] font-bold text-lg">
                  No.{pokemonData.id.toString().padStart(3, '0')}
                </div>
                <div className="relative">
                  <img
                    src={pokemonData.artwork}
                    alt={pokemonData.pokemonName}
                    className="w-56 h-56 object-contain drop-shadow-lg hover:scale-105 transition-transform cursor-pointer pixelated"
                    onClick={playCry}
                  />
                </div>
                <button
                  onClick={playCry}
                  className="mt-4 px-4 py-2 bg-[#0f380f] text-[#9bbc0f] font-bold flex items-center transition-all duration-300
                  shadow-[2px_2px_0px_#306230] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
                  hover:bg-[#306230]"
                >
                  PLAY CRY
                </button>
              </div>

              <div className="md:w-1/2 p-6">
                <h2 className="text-2xl font-bold uppercase mb-3 border-b-4 border-[#0f380f] pb-1">
                  {pokemonData.pokemonName}
                </h2>
                
                <div className="flex gap-2 mb-6">
                  {pokemonData.types.map((type) => (
                    <span
                      key={type}
                      className={`px-3 py-1 text-[#e0f8d0] font-bold uppercase text-sm ${
                        typeColors[type] || 'bg-[#0f380f]'
                      } border-2 border-[#0f380f]`}
                    >
                      {type}
                    </span>
                  ))}
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 uppercase">Abilities:</h3>
                  <div className="space-y-3">
                    {pokemonData.abilities.map((ability) => (
                      <div
                        key={ability}
                        className="bg-[#e0f8d0] p-3 border-4 border-[#0f380f]"
                      >
                        <h4 className="font-bold uppercase">{ability}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}