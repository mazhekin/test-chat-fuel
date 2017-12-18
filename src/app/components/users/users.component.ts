import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../shared/services/users.service';
import {Paging, User} from '../../models/users.models';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/do';

interface UsersPage {
  result: User[];
  paging: Paging;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  usersPage: UsersPage = { result: [], paging: { page: 0, totalPages: 0 } };
  queryParams$: Subscription;
  loading = false;

  constructor(private usersService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.queryParams$ = this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.loading = true;
      this.usersService.getUsers(params['page']).do(() => { this.loading = false; })
        .subscribe(usersPage => {
          this.usersPage = usersPage;
          this.loading = false;
        });
    });
  }

  ngOnDestroy() {
    this.queryParams$.unsubscribe();
  }

  pageClicked(pageNumber) {
    this.router.navigate(['/users'], { queryParams: { page: pageNumber } });
  }
}
