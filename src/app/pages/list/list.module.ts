import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListContentComponent } from './components/list-content/list-content.component';
import { EmployeesService } from './services/employees.service';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ListContentComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    ScrollingModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [EmployeesService],
})
export class ListModule {}
