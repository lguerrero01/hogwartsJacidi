import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { TableHogwartsComponent } from './components/table-hogwarts/table-hogwarts.component';
import { NewStudentsComponent } from './pages/new-students/new-students.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentFormComponent,
    TableHogwartsComponent,
    NewStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
