import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css'],
})
export class UserSelectComponent implements OnInit {
  users: any[] = [];

  @Output() userSelected = new EventEmitter<string>();

  // ✅ رابط المستخدمين على MockAPI
  private apiUrl = 'https://6862809696f0cc4e34b9faaa.mockapi.io/roeya/users';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      this.users = data;
    });
  }

  selectUser(event: Event) {
    const selected = (event.target as HTMLSelectElement).value;
    this.userSelected.emit(selected);
  }
}
