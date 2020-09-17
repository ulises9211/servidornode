import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    idProducto: number;

    @Column()
    id: string;

    @Column()
    nombre: string;

    @Column()
    precio: string;

    @Column()
    vendedor: string;

    @Column()
    hora: string;

    @Column()
    cantidadDisponible: string;
}
