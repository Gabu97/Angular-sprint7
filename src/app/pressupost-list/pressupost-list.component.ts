
import { calculatorService } from './../services.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent {
  budgets: any[];
  budget:any = {};
  public budgetshow: boolean = false;
  
constructor(private calculatorService: calculatorService,
  private router: Router){this.budgets = this.calculatorService.getBudget();}

ngOnInit() {

}


ordenarAlf(){
 this.budgets.sort( (a:any, b:any) => (a.budgetName - b.budgetName ) ? 1 : -1);
  
}

ordenarFecha(){
  this.budgets.sort( (a:any, b:any) => (a.date > b.date ) ? 1 : -1);
}
reinicio(){
  this.budgets.sort( (a:any, b:any) => (a.id > b.id ) ? 1 : -1);
}

verBudget(id: number){
  this.router.navigate(['budget', id]);
  this.budget = this.calculatorService.getBudget();
  this.budgetshow = true;
}


}
