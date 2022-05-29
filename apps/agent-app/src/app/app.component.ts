import { Component } from '@angular/core';
import { TodoService } from '@agent-org/todo-common'
@Component({
  selector: 'agent-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private todoService: TodoService) {

  }
  title = 'agent-app';
  todo$ = this.todoService.getTodoList();


}
