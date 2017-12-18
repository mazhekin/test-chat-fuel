import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HeaderComponent} from './layout/header/header.component';
import { UsersComponent } from './users/users.component';
import { UserRowComponent } from './users/user-row/user-row.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    UsersComponent,
    UserRowComponent,
    UserEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule { }
