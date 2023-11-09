import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./User.entity";

@Entity("tasks")
export default class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  crated_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ default: false })
  checked: boolean;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}
