export interface PokemonRepository {
  getPokemonsByColorId(colorId: string): Promise<any>;
  getPokemonByIdOrName(idOrName: string): Promise<any>;
  getPokemonsPaginated(limit: number, offset: number): Promise<any>;
}
