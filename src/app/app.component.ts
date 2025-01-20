import { Component, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';

  users = DUMMY_USERS;

  selectedUserId: string = 'u1';

  get userName() {
    return this.users.find((user) => user.id === this.selectedUserId)?.name!;
  }
  get userId() {
    return this.users.find((user) => user.id === this.selectedUserId)?.id!;
  }
  // get selectedUser() {
  //   return this.users.find((user) => user.id === this.selectedUserId)!;
  // }

  onSelectUser(id: string) {
    // console.log('current user id: ' + id);
    this.selectedUserId = id;
  }
}
