import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Brand } from './brand.entity';

@Entity({ name: 'usuarios' })
export class User {
    @PrimaryGeneratedColumn({ name: 'id_usuario' })
    id: number;

    @Column({ name: 'nombre' })
    name: string;

    @Column({ name: 'correo' })
    email: string;

    @Column({ name: 'clave' })
    password: string;

    @Column({ name: 'rol', type: 'int' })
    role: number;

    @Column({ type: 'boolean', default: true, name: 'activo' })
    isActive: boolean;

    @OneToMany(() => Brand, (brand) => brand.user)
    @JoinColumn({ name: 'usuario_id' })
    brands: Brand[];
}
