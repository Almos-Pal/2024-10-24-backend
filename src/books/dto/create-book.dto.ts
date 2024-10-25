import { IsDefined, IsInt } from "class-validator";

export class CreateBookDto {

    @IsDefined()
    title: string;
    @IsDefined()
    author: string;
    @IsDefined()
    isbn: string;
    @IsInt()
    @IsDefined()
    publishYear: number;
}
