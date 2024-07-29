import { Component, OnInit } from '@angular/core';
import { SearchComponent } from './../search/search.component';
import { CardComponent } from './../card/card.component';
import * as jsonData from './../../assets/users.json';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [SearchComponent, CardComponent],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.css',
})
export class WrapperComponent implements OnInit {
  title = 'users-list';
  data: any = jsonData;
  users: any = [];
  filteredUsers: any[] = []; // Initial filtered users
  searchTerm: string = ''; // Store received search term
  ngOnInit() {
    this.users = this.data.default;
    this.filteredUsers = this.users; // Initialize filtered users as all users initially
  }

  onSearchTermReceived(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.filteredUsers = this.users.filter((user: any) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  clearSearch(clear: any) {
    clear.value = '';
    this.searchTerm = '';
    this.filteredUsers = this.users;
  }
}
