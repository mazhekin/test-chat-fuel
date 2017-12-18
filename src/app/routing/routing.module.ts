import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsModule} from '../components/components.module';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  providers: [
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
