import { DataSource, Repository } from 'typeorm';
import { Brand } from '../entities/brand.entity';
import { CreateBrand, GetBrand } from '../models/brand.model';
import { ERROR } from '../utilities/messages.utilities';

export class BrandRepository {
    private readonly repository: Repository<Brand>;

    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(Brand);
    }

    async FindByEmail(email: string): Promise<Brand | null> {
        return this.repository.findOne({ where: { email } });
    }

    async GetPaginate(filters: GetBrand): Promise<Brand[]> {
        const { page, limit, name, email } = filters;
        const query = this.repository.createQueryBuilder('brand');
        if (name) query.where('brand.name = :name', { name });
        if (email) query.where('brand.email = :email', { email });
        return query
            .skip((page - 1) * limit)
            .take(limit)
            .getMany();
    }

    async Create(brand: CreateBrand & { userId: number }): Promise<Brand> {
        if (await this.FindByEmail(brand.email))
            throw new Error(
                ERROR.RESOURCE_ALREADY_EXISTS.replace('$s', 'Brand'),
            );
        return this.repository.save(brand);
    }

    async Update(brand: Brand & { id: number }): Promise<Brand> {
        return this.repository.save(brand);
    }
}
