import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HeaderComponent} from "./layout/header/header.component";
import { UsersComponent } from './users/users.component';
import { UserRowComponent } from './users/user-row/user-row.component';

@NgModule({
  declarations: [
    HeaderComponent,
    UsersComponent,
    UserRowComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
