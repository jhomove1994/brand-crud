import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUser } from '../models/user.model';
import { ERROR } from '../utilities/messages.utilities';

export class UserRepository {
    private readonly repository: Repository<User>;
    constructor(dataSource: DataSource) {
        this.repository = dataSource.getRepository(User);
    }

    async FindByEmail(email: string): Promise<User | null> {
        return this.repository.findOne({ where: { email } });
    }

    async Create(user: CreateUser): Promise<User> {
        if (await this.FindByEmail(user.email))
            throw new Error(
                ERROR.RESOURCE_ALREADY_EXISTS.replace('$s', 'User'),
            );
        return this.repository.save(user);
    }
}
