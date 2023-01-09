import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { calculatorService } from '../services.service';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.css'],
})
export class BudgetDetailComponent implements OnInit {
  budget: any = {};
 /* get budget() {
   return this.calculatorService.budgets;
  }*/
  budgets:any[]=[];
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private calculatorService: calculatorService
  ) {}

  ngOnInit() {
    this.id = +!this.route.snapshot.paramMap.get('id');
    this.budget = this.budgets.filter((budget: any) => budget.id === this.id);
    //this.budget = this.budgets.filter((budget:any)=>budget.id==this.id);
    console.log(this.id);
    console.log(this.budget);
  }


}