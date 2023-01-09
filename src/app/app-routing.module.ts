
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetDetailComponent } from './budget-detail/budget-detail.component';

const routes: Routes = [
  { path: 'budget/:id', component: BudgetDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
