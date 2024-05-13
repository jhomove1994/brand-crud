import { DataSource, Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';
import { CreateBrand, GetBrand } from '../models/brand.model';

export class BrandRepository {
    private readonly repository: Repository<Brand>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(Brand);
    }

    async GetPaginate(filters: GetBrand): Promise<Brand[]> {
        const { page, limit, name, email } = filters;
        const query = this.repository.createQueryBuilder('brand');
        if (name) query.where('brand.name = :name', { name });
        if (email) query.where('brand.email = :email', { email });
        return await query
            .skip((page - 1) * limit)
            .take(limit)
            .getMany();
    }

    async Create(brand: CreateBrand): Promise<Brand> {
        return await this.repository.save(brand);
    }
}
