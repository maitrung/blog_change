import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CrateTodo{
    @PrimaryGeneratedColumn()
    id:string
    @Column()
     todolist:string
    @Column()
     todoDesc:string
}