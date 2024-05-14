import { CreateBrand, GetBrand } from '../models/brand.model';

export const CreateBrandMapper = (body: any): CreateBrand => {
    if (!body) throw new Error('Body is required');
    if (typeof body !== 'object') throw new Error('Body must be an object');

    const brand = new CreateBrand();
    brand.name = body.name;
    brand.address = body.address;
    brand.phone = body.phone;
    brand.email = body.email;
    return brand;
};

export const UpdateBrandMapper = (body: any): Partial<CreateBrand> => {
    if (!body) throw new Error('Body is required');
    if (typeof body !== 'object') throw new Error('Body must be an object');

    const brand = new CreateBrand();
    if (body.name) brand.name = body.name;
    if (body.address) brand.address = body.address;
    if (body.phone) brand.phone = body.phone;
    if (body.email) brand.email = body.email;
    return brand;
};

export const GetBrandMapper = (headers: any): GetBrand => {
    if (!headers) throw new Error('Headers is required');
    if (typeof headers !== 'object')
        throw new Error('Headers must be an object');

    const filter = new GetBrand();
    filter.name = headers.name;
    filter.email = headers.email;
    return filter;
};
