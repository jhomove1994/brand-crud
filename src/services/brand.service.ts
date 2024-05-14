import { Brand } from '../entities/brand.entity';
import { User } from '../entities/user.entity';
import { CreateBrand, GetBrand } from '../models/brand.model';
import { CreateUser } from '../models/user.model';
import { BrandRepository } from '../repositories/brand.repository';
import { UserService } from './user.service';

export class BrandService {
    constructor(
        private brandRepository: BrandRepository,
        private userService: UserService,
    ) {}

    async GetPaginate(filters: GetBrand): Promise<any> {
        filters.page = filters.page || 1;
        filters.limit = filters.limit || 10;
        return await this.brandRepository.GetPaginate(filters);
    }

    async Create(brand: CreateBrand): Promise<Brand> {
        const user: User = await this.userService.Create({
            email: brand.email,
            name: brand.name,
        } as CreateUser);
        return await this.brandRepository.Create({ ...brand, userId: user.id });
    }

    async Update(brand: Brand & { id: number }): Promise<Brand> {
        return await this.brandRepository.Update(brand);
    }
}
