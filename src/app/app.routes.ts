import { Routes } from '@angular/router';
import { AddTaskPageComponent } from './pages/add-task-page/add-task-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';

export const routes: Routes = [
    { path: '', redirectTo: 'add-task', pathMatch: 'full' },
    { path: 'add-task', component: AddTaskPageComponent },
    { path: 'tasks', component: TaskListPageComponent },
];
