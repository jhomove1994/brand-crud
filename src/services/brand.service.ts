import { Brand } from '../entities/brand.entity';
import { CreateBrand, GetBrand } from '../models/brand.model';
import { BrandRepository } from '../repositories/brand.repository';

export class BrandService {
    constructor(private brandRepository: BrandRepository) {}

    async GetPaginate(filters: GetBrand): Promise<any> {
        filters.page = filters.page || 1;
        filters.limit = filters.limit || 10;
        return await this.brandRepository.GetPaginate(filters);
    }

    async Create(brand: CreateBrand): Promise<Brand> {
        return await this.brandRepository.Create(brand);
    }
}
