import { IsString, IsNotEmpty } from 'class-validator';
export class GetPokemonDto {
  @IsString()
  @IsNotEmpty()
  idOrName: string;
}
