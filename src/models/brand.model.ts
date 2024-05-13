import { IsEmail, IsString } from 'class-validator';
import { Filter } from './filter.model';

export class CreateBrand {
    @IsString()
    name: string;

    @IsString()
    address: string;

    @IsString()
    phone: string;

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
