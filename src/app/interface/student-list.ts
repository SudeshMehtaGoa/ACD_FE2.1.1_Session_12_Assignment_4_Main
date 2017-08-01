/* store list of students*/
export interface IStudentList {
    studentName: string;
    studentAddress: string;
    studentExamDate:Date;
    studentSubject: number;
    studentMarks: number;
}

/* Insert new student */
export interface IStudentModel {
    studentName: string;
    studentAddress: string;
    studentExamDate:Date;
    studentSubject: number;
    studentMarks: number;
}
