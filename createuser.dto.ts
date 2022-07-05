import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CreateUser{
    @PrimaryGeneratedColumn()
    id:string;
    @Column()
    username:string;
    @Column()
    password:string;
    @Column()
    fullname:string;
}