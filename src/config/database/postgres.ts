import { DataSource } from 'typeorm';
import { Brand } from '../../entities/brand.entity';
import 'dotenv/config';
import { User } from '../../entities/user.entity';

export const postgresConfig = new DataSource({
    type: 'postgres',
    host: process.env.DB_URL,
    ssl: true,
    port: (process.env.DB_PORT as number | undefined) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Brand, User],
    logging: true,
    synchronize: false,
});
