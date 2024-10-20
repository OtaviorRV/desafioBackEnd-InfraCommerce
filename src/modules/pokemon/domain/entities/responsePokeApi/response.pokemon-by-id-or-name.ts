interface Ability {
  name: string;
  url: string;
}

interface AbilityDetail {
  ability: Ability;
  is_hidden: boolean;
  slot: number;
}

interface CryLinks {
  latest: string;
  legacy: string;
}

interface Form {
  name: string;
  url: string;
}

interface Version {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: Version;
}

interface Move {
  name: string;
  url: string;
}

interface MoveLearnMethod {
  name: string;
  url: string;
}

interface VersionGroup {
  name: string;
  url: string;
}

interface VersionGroupDetail {
  level_learned_at: number;
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
}

interface MoveDetail {
  move: Move;
  version_group_details: VersionGroupDetail[];
}

interface PokemonInfo {
  abilities: AbilityDetail[];
  base_experience: number;
  cries: CryLinks;
  forms: Form[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: MoveDetail[];
}

export interface ResponsePokemonByIdOrName {
  data: PokemonInfo;
}
