import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewTask, NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input() name!: string;
  @Input() id!: string;

  isAddingTask = false;

  tasks = DUMMY_TASKS;

  get userTasks() {
    return this.tasks.filter((item) => item.userId === this.id);
  }

  onCompleteTask(id: string) {
    return (this.tasks = this.tasks.filter((item) => item.id !== id));
  }
  onStartAddingTask() {
    this.isAddingTask = true;
  }
  onCancelAddingTask() {
    this.isAddingTask = false;
  }
  onAddTask(taskData: NewTask) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    console.log('data added');
    this.isAddingTask = false;
  }
}
