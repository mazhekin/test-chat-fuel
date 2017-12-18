import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users = [
    {id: 1, name: 'Denis', avatarUrl: 'http://img1.jurko.net/avatar_12630.jpg' },
    {id: 2, name: 'Sara', avatarUrl: 'http://img1.jurko.net/SaraJane.jpg' },
    {id: 3, name: 'Lewis', avatarUrl: 'http://img1.jurko.net/avatar_2804.gif' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
