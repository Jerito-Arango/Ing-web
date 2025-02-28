import { IsString, IsNumber} from "class-validator";

export class CreateDictatorDto {
    @IsString()
    readonly id: string;
    @IsString()
    readonly name: string;
    @IsString()
    readonly territory: string;
    @IsNumber()
    readonly slaves: number;
}
