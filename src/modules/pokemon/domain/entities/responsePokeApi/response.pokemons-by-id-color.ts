interface PokemonColor {
  name: string;
  url: string;
}

export interface ResponsePokemonColor {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonColor[];
}
