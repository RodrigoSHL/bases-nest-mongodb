import { IsNumber, IsPositive, IsString, MinLength, isInt } from "class-validator";

export class CreatePokemonDto {

    @IsString()
    @MinLength(1)
    readonly name: string;

    @IsNumber()
    @IsPositive()
    readonly no: number;

    @IsString()
    @MinLength(1)
    readonly type: string;
}
