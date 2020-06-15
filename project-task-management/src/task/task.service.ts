import { Injectable } from '@nestjs/common';

import { Task, TaskStatus } from './task.model';

import { CreateTaskDto } from './dto/CreateTaskDto';

@Injectable()
export class TasksService {
  private task: Task[] = [];

  getAllTasks(): Task[] {
    return this.task;
  }

  getTaskById(id: string): Task {
    const task = this.task.find(item => item.id === id);
    return task;
  }

  createTask(createTaskDto: CreateTaskDto): void {
    const { title, description } = createTaskDto;
    const list: Task = {
      id: Math.random().toString(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.task.push(list);
  }

  deleteTask(id: string): Task[] | string {
    const index = this.task.findIndex(item => item.id === id);

    if (index < 0) {
      return 'task not existis';
    }

    return this.task.splice(index, 1);
  }

  updateStatusTask(status: TaskStatus, id: string): Task {
    const task = this.getTaskById(id);

    task.status = status;

    return task;
  }
}
