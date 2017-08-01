/* Student List */
import { Component, OnInit } from '@angular/core';
/* interfaces */
import { IStudentList } from 'app/interface/student-list';
/* services */
import { StudentService } from 'app/service/Student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  providers: []
})
export class StudentListComponent implements OnInit {

  StudentsArray: IStudentList[] = [];

  constructor(private _student_Service: StudentService) {
  }

  ngOnInit() {
    this.StudentsArray = this._student_Service.getStudentList();
  }

}
