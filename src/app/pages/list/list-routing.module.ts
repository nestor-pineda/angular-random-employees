import { ListDetailComponent } from './components/list-detail/list-detail.component';
import { ListContentComponent } from './components/list-content/list-content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ListContentComponent },
  { path: 'detail/:idEmployee', component: ListDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
