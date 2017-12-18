import {Routes} from '@angular/router';
import {UsersComponent} from '../components/users/users.component';
import {UserEditComponent} from '../components/users/user-edit/user-edit.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users'
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserEditComponent
  }
];
