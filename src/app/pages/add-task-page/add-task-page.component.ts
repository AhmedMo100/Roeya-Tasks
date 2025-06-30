import { Component } from '@angular/core';
import { AddTaskComponent } from '../../components/add-task/add-task.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-task-page',
  standalone: true,
  imports: [AddTaskComponent, RouterModule],
  template: `
    <!-- ✅ الفورم بدون أي خلفية أو ظل -->
    <div class="max-w-xl mx-auto mt-6 px-4 add-task">
      <app-add-task></app-add-task>

      <!-- ✅ الزر الأزرق تحت الفورم -->
      <button
        routerLink="/tasks"
        class="w-full view-all-tasks text-white font-semibold py-2 mt-5 rounded transition"
        type="button"
      >
        View Task List
      </button>
    </div>
  `
})
export class AddTaskPageComponent {}
