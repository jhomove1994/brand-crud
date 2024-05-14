import { IsEmail, IsString, IsNumber } from 'class-validator';
import { Filter } from './filter.model';

export class CreateBrand {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsNumber()
    phone: number;

    @IsString()
    @IsEmail()
    email: string;
}

export class GetBrand extends Filter {
    @IsString()
    name: string;

    @IsString()
    email: string;
}
