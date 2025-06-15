import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';
import { Task } from 'src/entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async findAll(userId: number): Promise<Task[]> {
    return this.tasksRepository.find({ where: { user: { id: userId } } });
  }

  async create(createTaskDto: CreateTaskDto, userId: number): Promise<Task> {
    const task = this.tasksRepository.create({
      ...createTaskDto,
      user: { id: userId },
    });
    return this.tasksRepository.save(task);
  }

  async update(id: number, updateTaskDto: UpdateTaskDto, userId: number): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id, user: { id: userId } } });
    if (!task) throw new NotFoundException('Task not found');
    Object.assign(task, updateTaskDto);
    return this.tasksRepository.save(task);
  }

  async findOne(id: number, userId: number): Promise<Task> {
    const task = await this.tasksRepository.findOne({
      where: {
        id,
        user: { id: userId },
      },
    });
  
    if (!task) {
      throw new NotFoundException('Task not found');
    }
  
    return task;
  }
  

  async remove(id: number, userId: number): Promise<void> {
    const task = await this.tasksRepository.findOne({ where: { id, user: { id: userId } } });
    if (!task) throw new NotFoundException('Task not found');
    await this.tasksRepository.remove(task);
  }
}