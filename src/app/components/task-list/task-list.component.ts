import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnChanges {
  @Input() selectedUser: string = '';
  tasks: any[] = [];

  // ✅ رابط الـ MockAPI
  private apiUrl = 'https://6862809696f0cc4e34b9faaa.mockapi.io/roeya/tasks';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser']) {
      this.loadTasks();
    }
  }

  loadTasks() {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.tasks = this.selectedUser
        ? data.filter(task => task.assignedTo === this.selectedUser)
        : data;
    });
  }
}
