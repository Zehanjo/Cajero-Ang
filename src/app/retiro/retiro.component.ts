import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
// import { parse } from 'path';

@Component({
  selector: 'app-retiro',
  templateUrl: './retiro.component.html',
  styleUrls: ['./retiro.component.scss']
})
export class RetiroComponent implements OnInit {
  @Output() nameNumber = new EventEmitter();
  @Output() saldoRestante = new EventEmitter();
  @Output() reset = new EventEmitter();

  @Input() saldoActual: number;
  @Input() montoRetire: string;
  @Input() nroCuenta: number;
  @Input() option: number;

  show: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  show4: boolean = false;

  saldoRestant: string;
  optionName: string = "";
  retiro: number;

  // user
  nroCta: number = 98765432;
  constructor() { }

  ngOnInit() {
  }

  loadRetire(number) {
    console.log("numero" + number)
    if (number == 1) {
      this.nameNumber.emit(number);
    } else {
      this.reset.emit(0);
      if (this.option==2) {
        this.show = !this.show;
        this.show4 = !this.show4;
      } else {
        this.show = !this.show;
        this.show2 = !this.show2;
        if (this.option == 0) {
          this.optionName = "RETIRO";
        } else if (this.option == 1) {
          this.optionName = "TRANSFERENCIA";
        }
      }
    }
  }

  updateSaldo() {
    this.retiro = parseInt(this.montoRetire);
    if (this.option == 0) {
      if (parseInt(this.montoRetire) > this.saldoActual) {
        alert("Usted no cuenta con esa cantidad de dinero: Revisar estado de cuenta");
        this.reset.emit(0);
      } else {
        alert("Dinero Retirado Correctamente : " + this.retiro);
        this.saldoRestant = (this.saldoActual - this.retiro).toString();
        console.log(this.saldoRestant);
        this.saldoRestante.emit(this.saldoRestant + "e");
        this.loadRetire(1);
      }
    } else if (parseInt(this.montoRetire) > this.saldoActual) {
      alert("Usted no cuenta con esa cantidad de dinero: Revisar estado de cuenta");
      this.reset.emit(0);
    } else {
      this.saldoRestante.emit(this.retiro + "f");
      this.show2 = !this.show2;
      this.show3 = !this.show3;
    }
  }

  updateSaldo2() {
    if (parseInt(this.montoRetire) == 98765432) {
      this.saldoRestante.emit(this.montoRetire + "w");
      console.log(this.montoRetire + "w");
      this.loadRetire(1);
    } else if (this.montoRetire.length > 8) {
      alert("Limite de digitos nro de tarjeta(8): Ingrese la cuenta destino nuevamente");
      this.reset.emit(0);
    } else {
      alert("Cta. Incorrecta");
    }
  }


  cleanMonto() {
    this.montoRetire = "";
  }

}
