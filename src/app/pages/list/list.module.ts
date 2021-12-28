import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListContentComponent } from './components/list-content/list-content.component';
import { EmployeesService } from './services/employees.service';
import { ListDetailComponent } from './components/list-detail/list-detail.component';

@NgModule({
  declarations: [ListContentComponent, ListDetailComponent],
  imports: [CommonModule, ListRoutingModule],
  providers: [EmployeesService],
})
export class ListModule {}
