import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../shared/services/users.service';
import {Paging, User} from '../../models/users.models';
import {ActivatedRoute, NavigationEnd, Params, Router} from '@angular/router';

interface UsersPage {
  result: User[];
  paging: Paging;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private currentPageNumber;
  usersPage: UsersPage = { result: [], paging: { page: 0, totalPages: 0 } };

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.usersService.getUsers(this.currentPageNumber).subscribe(usersPage => { this.usersPage = usersPage; });
      }
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.currentPageNumber = params['page'];
    });
  }

  ngOnInit() {
  }

  pageClicked(pageNumber) {
    this.router.navigate(['/users'], { queryParams: { page: pageNumber } });
  }
}
