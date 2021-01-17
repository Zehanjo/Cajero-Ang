import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NUMEROS } from '../model/numeros';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.scss']
})
export class NumerosComponent implements OnInit {

  @Output() nameNumber = new EventEmitter();

  @Input() estatusRes: number;
  constructor() { }

  ngOnInit(): void {
  }
  dataNumber = NUMEROS;

  loadNumber(number){
    if(this.estatusRes==0){
      if(number==11){
        alert("Boton deshabilitado:Presione uno de los botones de la pantalla")
      }else{
        this.nameNumber.emit(number);
      }
    }else{
      this.nameNumber.emit(number);
    }
  }
}
