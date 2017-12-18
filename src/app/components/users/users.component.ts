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
    {id: 3, name: 'Louis', avatarUrl: 'http://img1.jurko.net/avatar_2804.gif' },
    {id: 4, name: 'Jessica', avatarUrl: 'http://img1.jurko.net/avatar_11746.jpg' },
    {id: 5, name: 'Steve', avatarUrl: 'http://img1.jurko.net/avatar_3872.jpg' },
    {id: 6, name: 'Woody', avatarUrl: 'http://avatars.jurko.net/uploads/avatar_21562.jpg' },
    {id: 7, name: 'Martin', avatarUrl: 'http://img1.jurko.net/avatar_3213.jpg' },
    {id: 8, name: 'Barbara', avatarUrl: 'http://img1.jurko.net/avatar_4429.gif' },
    {id: 9, name: 'Thomas', avatarUrl: 'http://img1.jurko.net/avatar_2381.gif' },
    {id: 10, name: 'Yehuda', avatarUrl: 'http://img1.jurko.net/avatar_13060.jpg' },
    {id: 11, name: 'Margaret', avatarUrl: 'http://img1.jurko.net/avatar_2807.png' },
    {id: 12, name: 'Edwin', avatarUrl: 'http://img1.jurko.net/avatar_16930.jpg' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
