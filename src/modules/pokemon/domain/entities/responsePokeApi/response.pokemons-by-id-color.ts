interface Language {
  name: string;
  url: string;
}

interface Name {
  language: Language;
  name: string;
}

interface PokemonSpecies {
  name: string;
  url: string;
}

interface PokemonColorInfo {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export interface ResponsePokemonByIdColor {
  status: number;
  data: PokemonColorInfo;
}
