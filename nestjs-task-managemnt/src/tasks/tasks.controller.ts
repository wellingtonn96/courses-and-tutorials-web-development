import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation-pipe';

// import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private taskServices: TasksService) {}

  // @Get()
  // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.taskServices.getTasksWithFilters(filterDto);
  //   } else {
  //     return this.taskServices.getAllTasks();
  //   }
  // }

  // @Get('/:id')
  // getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
  //   return this.taskServices.getTaskById(id);
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
  //   return this.taskServices.createTask(createTaskDto);
  // }

  // @Delete('/:id')
  // deleteTaskByID(@Param('id') id: string): Task {
  //   return this.taskServices.deleteTaskByID(id);
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  // ): Task {
  //   return this.taskServices.updateTaskStatus(id, status);
  // }
}
