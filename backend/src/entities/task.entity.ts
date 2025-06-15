import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: 'To Do' })
  status: string;

  @Column()
  due_date: Date;

  @ManyToOne(() => User, (user) => user.tasks)
  user: User;
}