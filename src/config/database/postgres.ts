import { DataSource } from 'typeorm';
import { Brand } from '../../entities/brand.entity';

export const postgresConfig = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'secret',
    database: 'brands_db',
    entities: [Brand],
    logging: true,
    synchronize: false,
});
