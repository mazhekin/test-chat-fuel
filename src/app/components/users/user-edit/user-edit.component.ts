import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {UsersService} from '../../../shared/services/users.service';
import {User} from '../../../models/users.models';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: User;
  public userForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.usersService.getUser(params['id']).subscribe(user => {
        this.user = user;

        this.userForm = this.formBuilder.group({
          name: user.name,
          avatarUrl: user.avatarUrl
        });
      });
    });
  }

  onSubmit() {
    this.usersService.saveUser(this.user.id, this.userForm.value).subscribe(
      data => { alert('user has been saved successfully'); },
      error => {
        alert(`error while saving (${error.status} - ${error.statusText})`);
      }
    );
  }
}
