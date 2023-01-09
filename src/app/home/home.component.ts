import { calculatorService } from './../services.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private calculatorService: calculatorService) {}
  /*calculator = new FormGroup({
    firstName: new FormControl(''),
    budgetName: new FormControl(''),
    age: new FormControl('')
  });*/
  ngOnInit(): void {
    console.log('La Web se ha cargado');
  }
  get showCalculator(): boolean {
    return this.calculatorService.showCalculator;
  }
set nameClient(value: string){
 this.calculatorService.nameClient = value;
}
set nameBudget(value: string){
  this.calculatorService.nameBudget = value;
 }
  get buttonName(): any {
    return this.calculatorService.buttonName;
  }
  set web(value: boolean) {
    this.calculatorService.web = value;
  }
  set seo(value: boolean) {
    this.calculatorService.seo = value;
  }
  set google(value: boolean) {
    this.calculatorService.google = value;
  }
  get precioTotal(): number {
    return this.calculatorService.precioTotal;
  }
  set idiomas(value: number) {
    this.calculatorService.idiomas = value;
  }
  set pags(value: number) {
    this.calculatorService.pags = value;
  }
  get showPanel(): boolean {
    return this.calculatorService.showPanel;
  }
  get showList(){
    return this.calculatorService.showList;
  }

  togglePanel() {
    this.calculatorService.togglePanel();
  }
  toggle() {
    this.calculatorService.toggle();
  }
  showBudgets(){
    this.calculatorService.toggleList();
  }
saveBudget(){
  this.calculatorService.saveBudget();
 
}
  calculatePrice() {
    this.calculatorService.calculatePrice();
  }
}
