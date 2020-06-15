import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/CreateTaskDto';

import { TasksService } from './task.service';

import { Task, TaskStatus } from './task.model';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): void {
    return this.taskService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Task[] | string {
    return this.taskService.deleteTask(id);
  }

  @Patch('/:id/status')
  updateStatusTask(@Body() status: TaskStatus, @Param('id') id: string): Task {
    return this.taskService.updateStatusTask(status, id);
  }
}
