/* Router file */
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from 'app/component/student-component/student.component';
import { StudentListComponent } from "app/component/student-list/student-list.component";
import { PageNotFoundComponent } from 'app/component/page-not-found/page-not-found.component';
import { StudentDetailComponent } from 'app/component/student-detail/student-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/student', pathMatch: 'full' },
  { path: 'student', component: StudentComponent },
  { path: 'studentList', component: StudentListComponent },
  { path: 'studentDetail/:studentName', component: StudentDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouting = RouterModule.forRoot(routes);