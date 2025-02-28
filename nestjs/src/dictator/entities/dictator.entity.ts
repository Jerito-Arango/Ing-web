import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("dictador")
export class Dictator {
    @PrimaryGeneratedColumn('uuid')//uuid es una serie de números y letras que siempre va a ser distinto y difiere a las cosas
    id:string;
    @Column('text',{
        default:'Nombre apellido'
    })
    name:string;
    @Column('text',{
        default:"gran colombia"
    })
    territory:string;
    @Column('numeric',{
        default: 0
    })
    slaves:number;
}
