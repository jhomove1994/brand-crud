import { User } from '../entities/user.entity';
import { CreateUser, ROLE_ENUM } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import * as bcrypt from 'bcrypt';
import { generateRandomPassword } from '../utilities/user.utilities';

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async Create(user: Partial<CreateUser>): Promise<User> {
        user.role = ROLE_ENUM.BRAND;
        user.password = await bcrypt.hash(generateRandomPassword(), 10);
        return await this.userRepository.Create(user as CreateUser);
    }
}
