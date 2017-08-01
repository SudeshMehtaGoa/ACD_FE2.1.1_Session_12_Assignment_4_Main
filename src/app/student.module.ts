import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { StudentComponent } from 'app/component/student-component/student.component';
import { FirstCharUpCasePipe } from 'app/pipe/first-char-up-case.pipe';
import { SearchStudentPipe } from './pipe/search-student.pipe';
import { StudentMainComponent } from './component/student-main/student-main.component';
import { appRouting } from "app/routes/myapp.routes";
import { StudentListComponent } from './component/student-list/student-list.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

import { StudentService } from "app/service/Student.service";
import { StudentDetailComponent } from './component/student-detail/student-detail.component';

@NgModule({
  declarations: [
    StudentComponent,
    FirstCharUpCasePipe,
    SearchStudentPipe,
    StudentMainComponent,
    StudentListComponent,
    PageNotFoundComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CommonModule,
    appRouting
  ],
  providers: [StudentService],
  bootstrap: [StudentMainComponent]
})
export class StudentModule { }
