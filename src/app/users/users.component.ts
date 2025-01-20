import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

let randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  // @Input() avatar!: string;
  // @Input({ required: true }) name!: string;
  // @Input() id!: string;
  @Input() user!: User;
  @Output() select = new EventEmitter();
  @Output() selectedName = new EventEmitter();

  @Input() selected!: boolean;

  // currentUser = DUMMY_USERS[randomIndex];

  // imgPath will not work without get ****************
  get imgPath(): string {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    this.selectedName.emit(this.user.name);
  }
}
