import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentResultsIndexComponent } from './student-results-index/student-results-index.component';
import { StudentResultsComponent } from './student-results.component';

const routes: Routes = [
  {
    path: '',
    component: StudentResultsComponent,
    children: [
      {
        path: '',
        component: StudentResultsIndexComponent,
        data: { animation: 'students' },
      },
      {
        path: ':id',
        component: StudentDetailComponent,
        data: { animation: 'student' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentResultsRoutingModule {}
