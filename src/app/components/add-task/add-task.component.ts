import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  newTask = {
    title: '',
    description: '',
    dueDate: '',
    status: 'todo',
    assignedTo: '',
  };

  message: string = '';
  messageColor: 'red' | 'green' = 'green';

  constructor(private http: HttpClient) {}

  addTask() {
    const { assignedTo, title } = this.newTask;
    if (!assignedTo || !title) {
      this.showMessage('Please fill in all fields.', 'red');
      return;
    }

    // Step 1: Get existing tasks to check if user already has a task
    this.http.get<any[]>('http://localhost:3000/tasks').subscribe((tasks) => {
      const alreadyAssigned = tasks.some(
        (task) => task.assignedTo === assignedTo
      );

      if (alreadyAssigned) {
        this.showMessage(
          `User "${assignedTo}" already has a task assigned.`,
          'red'
        );
        return;
      }

      // Step 2: Check if user exists
      this.http.get<any[]>('http://localhost:3000/users').subscribe((users) => {
        const userExists = users.some((user) => user.username === assignedTo);

        const maybeAddUser = userExists
          ? Promise.resolve(null)
          : this.http
              .post('http://localhost:3000/users', { username: assignedTo })
              .toPromise();

        maybeAddUser.then(() => {
          // Step 3: Add the task
          this.http
            .post('http://localhost:3000/tasks', this.newTask)
            .subscribe(() => {
              this.showMessage('Task added successfully!', 'green');
              this.newTask = {
                title: '',
                description: '',
                dueDate: '',
                status: 'todo',
                assignedTo: '',
              };
            });
        });
      });
    });
  }

  showMessage(msg: string, color: 'red' | 'green') {
    this.message = msg;
    this.messageColor = color;
    setTimeout(() => {
      this.message = '';
    }, 4000);
  }
}
