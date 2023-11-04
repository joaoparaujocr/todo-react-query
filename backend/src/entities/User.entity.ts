import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Task from "./Task.entity";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120, unique: true, nullable: false })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];
}
