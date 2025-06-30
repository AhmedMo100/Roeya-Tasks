import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { UserSelectComponent } from '../../components/user-select/user-select.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-list-page',
  standalone: true,
  imports: [TaskListComponent, UserSelectComponent, RouterModule],
  template: `
    <div class="max-w-2xl mx-auto px-4 mt-8">

      <!-- مكون اختيار المستخدم -->
      <div class="mb-6">
        <app-user-select (userSelected)="selectedUser = $event"></app-user-select>
      </div>

      <!-- قائمة المهام -->
      <app-task-list [selectedUser]="selectedUser"></app-task-list>

      <!-- زر العودة -->
      <button
        routerLink="/add-task"
        class="w-full back-add-task text-white font-semibold py-2 mt-8 rounded transition"
        type="button"
      >
        Back to Add Task
      </button>
    </div>
  `
})
export class TaskListPageComponent {
  selectedUser = '';
}
