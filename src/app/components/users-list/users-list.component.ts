import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UsersModel } from '../../models/users.model';

@Component({
  selector: 'users-list-component',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: UsersModel[];
  route = 'users';
  constructor(private dataService: DataService) {}

  getUsers(): void {
    this.dataService.getData(this.route).subscribe(
      response => {
        this.users = response;
      },
      err => console.log('Error occured while fetching users', err)
    );
  }

  ngOnInit() {
    this.getUsers();
  }
}
