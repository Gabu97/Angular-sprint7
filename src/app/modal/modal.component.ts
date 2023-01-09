import { Component, OnInit, Input} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent  implements OnInit{
constructor( private modal:NgbModal){}
ngOnInit(): void{}
openSM(contenido:any){
this.modal.open(contenido,{size:'sm'});
}
}
