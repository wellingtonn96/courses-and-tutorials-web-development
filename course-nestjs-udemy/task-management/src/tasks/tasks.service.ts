import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v1 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task-dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter-dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string) {
    return this.tasks.find(task => task.id === id);
  }

  getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { status, search } = filterDto;

    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter(tasks => tasks.status === status);
    }

    if (search) {
      tasks = tasks.filter(
        tasks =>
          tasks.title.includes(search) || tasks.description.includes(search),
      );
    }
    return tasks;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): Task {
    const task = this.tasks.find(task => task.id === id);
    const index = this.tasks.findIndex(item => item.id === task.id);
    const [removedTask] = this.tasks.splice(index, 1);
    return removedTask;
  }

  updateStatusTask(id: string, status: TaskStatus): Task {
    const task = this.tasks.find(task => task.id === id);
    task.status = status;
    return task;
  }
}
