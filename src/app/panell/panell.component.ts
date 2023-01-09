import { calculatorService } from './../services.service';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css'],
})
export class PanellComponent implements OnInit {
  modalSwitch: boolean = false;
  @Output() modal1: string = '';
  @Input() pags: number = 0;
  @Input() idiomas: number = 0;

  @Output() pagsChange = new EventEmitter<number>();
  @Output() idiomasChange = new EventEmitter<number>();
  constructor(private calculatorService: calculatorService) {}
  ngOnInit() {
    this.pags = this.calculatorService.pags;
    this.idiomas = this.calculatorService.idiomas;
  }

  openModal() {
    this.modalSwitch = true;
  }
  closeModal() {
    this.modalSwitch = false;
  }

  decrementPags() {
    this.pags--;
    this.pagsChange.emit(this.pags);
  }

  incrementPags() {
    this.pags++;
    this.pagsChange.emit(this.pags);
  }

  decrementIdiomas() {
    this.idiomas--;
    this.idiomasChange.emit(this.idiomas);
  }

  incrementIdiomas() {
    this.idiomas++;
    this.idiomasChange.emit(this.idiomas);
  }
}
