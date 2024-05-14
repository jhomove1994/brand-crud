import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'marcas' })
export class Brand {
    @PrimaryGeneratedColumn({ name: 'id_marca' })
    id: number;

    @Column({ name: 'nombre' })
    name: string;

    @Column({ name: 'direccion' })
    address: string;

    @Column({ name: 'telefono', type: 'int' })
    phone: number;

    @Column({ name: 'correo' })
    email: string;

    @Column({ type: 'boolean', default: true, name: 'activo' })
    isActive: boolean;

    @Column({ name: 'usuario_id' })
    userId: number;

    @ManyToOne(() => User, (user) => user.brands)
    @JoinColumn({ name: 'usuario_id' })
    user: User;
}
