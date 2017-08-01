/* Add Student Component */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

/* interfaces */
import { IStudentList } from 'app/interface/student-list';
import { ISubjectType } from 'app/interface/student-subject';

/* services */
import { StudentService } from 'app/service/Student.service';
import { SubjectService } from 'app/service/Subject.service';
import { LogService } from 'app/service/log.service';
import { Observable } from "rxjs/Rx"

import { Router } from "@angular/router";


@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [LogService, SubjectService]
})

export class StudentComponent implements OnInit {

  title: string = 'Add Student';

  SubjectTypeArray: ISubjectType[] = [];

  StudentsArray: IStudentList[] = [];
  StudentDetail: IStudentList;
  searchData: string;

  /**Declaring myForm of Type FormGroup */
  myForm: FormGroup;
  bolValidForm: boolean;
  formValidMessage: string;

  constructor(private _student_Service: StudentService,
    private _SubjectService: SubjectService,
    private _logService: LogService,
    private fb: FormBuilder,
    private _router: Router) {
  }

  /**Define default values on ngOnInit function */
  ngOnInit() {
    this.bolValidForm = false;
    this.formValidMessage = "";
    this.searchData = '';

    this.myForm = this.fb.group({
      'studentName': ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z]*$'), Validators.minLength(2)])],
      'studentAddress': ['', Validators.required],
      'studentExamDate': ['', Validators.required],
      'studentSubject': ['', Validators.required],
      'studentMarks': ['', Validators.required, this.checkLimit]
    });

    this.SubjectTypeArray = this._SubjectService.getSubjectType();
  };
  /* addStudent method linked to form ngSubmit */
  addStudent(values, formValid) {
    this.bolValidForm = formValid;
    if (this.bolValidForm) {
      this.StudentDetail = {
        studentName: values.studentName,
        studentAddress: values.studentAddress,
        studentExamDate: values.studentExamDate,
        studentSubject: values.studentSubject,
        studentMarks: values.studentMarks
      };
      this._student_Service.addStudent(this.StudentDetail);
      this.StudentsArray = this._student_Service.getStudentList();
      this._logService.log();

      /**Redirecting page to cricketersList */
      this._router.navigate(['/studentList']);

    }
    else {
      this.formValidMessage = "Please insert all the required fields marked by RED mark."
    }
  };
  /* Form reset */
  resetForm() {
    this.myForm.reset();
    this.bolValidForm = false;
    this.formValidMessage = "";
  };

  /* solution source : 
  https://netbasal.com/angular-2-forms-create-async-validator-directive-dd3fd026cb45
  https://plnkr.co/edit/LBuvuSmEStjIL0nZFrz0?p=preview 
  */
  checkLimit(fieldControl: FormControl) {
    var fieldValue = +(fieldControl.value);
    return new Observable(observer => {
      if (isNaN(fieldValue) == false) {
        if (fieldValue >= 0 && fieldValue <= 100) {
          observer.next(null);
          observer.complete();
        }
        else {
          /* Marks are not in range(0 to 100) */
          observer.next({ notInRange: true });
          observer.complete();
        }
      }
      else {
        /* Contains non-numeric characters*/
        observer.next({ notNumeric: true });
        observer.complete();
      }
    });
  }
}

