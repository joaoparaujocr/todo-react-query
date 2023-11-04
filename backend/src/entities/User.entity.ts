import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120, unique: true, nullable: false })
  email: string;

  @Column()
  password: string;
}
