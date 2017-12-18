import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UsersService} from '../../../shared/services/users.service';
import {User} from '../../../models/users.models';
import {FormBuilder, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: User;
  public userForm: FormGroup;
  loading = false;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.loading = true;
      this.usersService.getUser(params['id']).do(() => { this.loading = false; })
        .subscribe(user => {
          this.loading = false;
          this.user = user;

          this.userForm = this.formBuilder.group({
            name: user.name,
            avatarUrl: user.avatarUrl
          });
        });
      });
  }

  onSubmit() {
    this.loading = true;
    this.usersService.saveUser(this.user.id, this.userForm.value).do(() => { this.loading = false; })
      .subscribe(
        data => { alert('user has been saved successfully'); },
        error => { alert(`error while saving (${error.status} - ${error.statusText})`); }
      );
  }
}
