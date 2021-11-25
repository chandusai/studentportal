import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentResultsRoutingModule } from './student-results-routing.module';
import { StudentResultsComponent } from './student-results.component';
import { ResultsTableContainerComponent } from './results-table-container/results-table-container.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentResultsIndexComponent } from './student-results-index/student-results-index.component';
import { SearchPipe } from '../core/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentResultsComponent,
    ResultsTableContainerComponent,
    StudentDetailComponent,
    StudentResultsIndexComponent,
    SearchPipe,
  ],
  imports: [CommonModule, FormsModule, StudentResultsRoutingModule],
})
export class StudentResultsModule {}
