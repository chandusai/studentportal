import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student-results-index',
  templateUrl: './student-results-index.component.html',
  styleUrls: ['./student-results-index.component.scss'],
})
export class StudentResultsIndexComponent implements OnInit {
  students: Student[] = [];

  constructor(
    private studentService: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  onStudentSelected(student: Student) {
    console.log('student is selected');
    console.log(student);
    this.router.navigate([student.id], { relativeTo: this.route });
  }
}
