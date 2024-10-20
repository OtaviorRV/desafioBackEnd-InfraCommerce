interface PokemonInformation {
  name: string;
  url: string;
}

interface GetPokemonsPaginatedResponse {
  total: number;
  pages: number;
  currentPage: number;
  recordsPerPage: number;
  data: PokemonInformation[];
}
