import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() selectedUser: string = '';
  tasks: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.http.get<any[]>('http://localhost:3000/tasks').subscribe(data => {
      this.tasks = this.selectedUser
        ? data.filter(task => task.assignedTo === this.selectedUser)
        : data;
    });
  }

  ngOnChanges() {
    this.loadTasks();
  }
}
