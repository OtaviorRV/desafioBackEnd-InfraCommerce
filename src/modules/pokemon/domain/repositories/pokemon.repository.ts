export interface PokemonRepository {
  findByIdOrName(idOrName: string): Promise<any>;
}
