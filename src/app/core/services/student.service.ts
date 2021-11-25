import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { STUDENTS } from './students.mock';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  getStudents(): Student[] {
    return STUDENTS;
  }

  getStudentById(id: number): Student | undefined {
    const studt = STUDENTS.find((s) => s.id == id);

    return studt;
  }

  getGradeCss(student: Student | undefined) {
    let grade = student?.averageGrade;
    if (grade == 'A') {
      let classes = {
        gradeA: true,
      };
      return classes;
    } else if (grade == 'B') {
      let classes = {
        gradeB: true,
      };
      return classes;
    } else if (grade == 'C') {
      let classes = {
        gradeC: true,
      };
      return classes;
    } else if (grade == 'D') {
      let classes = {
        gradeD: true,
      };
      return classes;
    }
    let classes = {
      gradeD: true,
    };
    return classes;
  }
}
