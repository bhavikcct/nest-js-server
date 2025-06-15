import { Controller, Get, Post, Put, Delete, Body, Param, Request, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';
import { Task } from 'src/entities/task.entity';
import { CreateTaskDto, UpdateTaskDto } from './dto/tasks.dto';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private tasksService: TasksService) {}

  
  @Get()
  findAll(@Request() req): Promise<Task[]> {
    return this.tasksService.findAll(req.user.userId);
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @Request() req): Promise<Task> {
    return this.tasksService.create(createTaskDto, req.user.userId);
  }

  @Get(':id')
async findOne(@Param('id') id: string, @Request() req): Promise<Task> {
  return this.tasksService.findOne(+id, req.user.userId);
}

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto, @Request() req): Promise<Task> {
    return this.tasksService.update(+id, updateTaskDto, req.user.userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req): Promise<void> {
    return this.tasksService.remove(+id, req.user.userId);
  }
}