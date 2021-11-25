import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-results-table-container',
  templateUrl: './results-table-container.component.html',
  styleUrls: ['./results-table-container.component.scss'],
})
export class ResultsTableContainerComponent implements OnInit {
  @Input()
  students: Student[] | undefined;
  searchKey = '';

  @Output()
  onStudentSelected: EventEmitter<Student> = new EventEmitter<Student>();

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  onStudentSelectionChange(student: Student) {
    this.onStudentSelected.emit(student);
  }
  setClass(student: Student) {
    return this.studentService.getGradeCss(student);
  }
}
