interface Pokemon {
  name: string;
  url: string;
}

export interface ResponsePokemonPaginated {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
