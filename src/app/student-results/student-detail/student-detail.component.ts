import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
})
export class StudentDetailComponent implements OnInit {
  product: any;
  id: any;
  student: Student | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentService: StudentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
    this.student = this.studentService.getStudentById(this.id);
    console.log(this.student);
    if (!this.student) {
      this.router.navigate(['not-found']);
    }
  }

  setClass(student: Student | undefined) {
    return this.studentService.getGradeCss(student);
  }
}
