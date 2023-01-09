import { Injectable } from '@angular/core';
//import { DatePipe } from '@angular/common';
@Injectable({
  providedIn: 'root',
})
export class calculatorService {
  public showCalculator: boolean = false;
  public buttonName: any = 'Start';
  public showPanel: boolean = false;
  public showList:boolean = false;
  public precioTotal = 0;
  public precioWeb = 500;
  public precioSeo = 300;
  public precioGoogle = 200;
  public web: boolean = false;
  public seo: boolean = false;
  public google: boolean = false;
  public pags: number = 0;
  public idiomas: number = 0;
public id:number = 0;
  public nameClient: string ="";
  public nameBudget: string ="";
  public budgets: any[] = [];

 // constructor(private datePipe: DatePipe) {}
  toggle() {
    this.showCalculator = !this.showCalculator;
    if (this.showCalculator) this.buttonName = 'Back';
    else this.buttonName = 'Start';
  }
  togglePanel() {
    this.showPanel = !this.showPanel;
  }

  toggleList(){
    this.showList = true;
  }

  calculatePrice() {
    this.precioTotal = 0;
    if (this.web) {
      this.precioTotal += this.precioWeb;
    }
    if (this.seo) {
      this.precioTotal += this.precioSeo;
    }
    if (this.google) {
      this.precioTotal += this.precioGoogle;
    }
    this.precioTotal += this.pags * this.idiomas * 30;
    if (!this.web && !this.seo && !this.google) {
      this.precioTotal = 0;
    }
  }
  saveBudget(){
    const today = new Date().toLocaleDateString();
 // const date = this.datePipe.transform(today, 'yyyy-MM-dd');
    this.budgets.push({
      id: this.id,
      nameClient: this.nameClient,
      nameBudget: this.nameBudget,
      web: this.web,
      seo: this.seo,
      google: this.google,
      date: today,
      pags: this.pags,
      idiomas: this.idiomas,
      precioTotal: this.precioTotal,
    });
    this.id++;
    console.log(this.budgets);
  }

  get budget(): any {
    return this.budgets;
  }

  getBudget():any[] {
   return this.budgets;
  }

 /* getBudgetById(id: number): any {
    return this.budgets.find((budget: any) => budget.id === id);
  }*/
}
