import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewStudentsRoutingModule } from './new-students-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewStudentsComponent } from './new-students.component';


@NgModule({
  declarations: [NewStudentsComponent],
  imports: [
    CommonModule,
    NewStudentsRoutingModule,
    SharedModule
  ]
})
export class NewStudentsModule { }
