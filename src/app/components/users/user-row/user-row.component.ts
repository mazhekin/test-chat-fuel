import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../models/users.models';

@Component({
  selector: '[appUserRow]',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.scss']
})
export class UserRowComponent implements OnInit {
  @Input('appUserRow') user = <User>null;

  constructor() { }

  ngOnInit() {
  }

}
