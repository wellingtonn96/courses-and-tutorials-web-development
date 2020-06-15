import { Module, Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

class CreateTaskDto {
  title: string;
  description: string;
}

@Injectable()
class TasksService {
  private task: Task[] = [];

  getAllTasks(): Task[] {
    return this.task;
  }

  // getById(id: string): Task {
  //   const task = this.task.find(item => item.id === id);
  //   return task;
  // }

  createTask(createTaskDto: CreateTaskDto) {
    const { title, description } = createTaskDto;
    const list: Task = {
      id: Math.random().toString(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.task.push(list);
  }
}

@Controller('tasks')
class TasksController {
  constructor(private taskService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.taskService.getAllTasks();
  }

  // @Get('/:id')
  // getById(@Param()) [

  // ]

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  //DeleteByID

  //Update
}

@Module({
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule {}
