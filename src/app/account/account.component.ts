import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  password:string="";
  password2:string="";
  pass:string="12345678";
  transferencia:string="";
  estado:number=1;
// user
  nroCta:number=98765432;
  nameCta:string="Verladez Russini Maria Jose"

  saldo:number = 1000;
  option2:number;

  show: boolean = true;
  show2: boolean = false;
  retire: boolean = false;
  accountStatus: boolean = false;
 
  constructor() { }

  ngOnInit() {
  }

  intemediario(num){
    if(this.show==false){
      this.password = this.password + num;
      if (num == 10) {
        this.clean();
      }
    }else{
      this.dataRecibe(num);
    }
  }

  dataRecibe(num){
    if (num == 10) {
      this.clean();
    } else if(num == 11){
      this.passwordSave();
    }else if(this.password.length == 8){
      alert("Limite de clave: Presione enter");
    }else{
      this.password2= this.password2+"*";
      this.password = this.password + num;
    }
  }
// Saldo restante y verificar y limpiador
  saldoRest(num){
    var letterE= (num.toString()).substr(num.length - 1)
    if(letterE=="e"){
      this.saldo=num.slice(0, -1);;
      this.clean();
    }else if(letterE=="f"){
      this.transferencia= num.slice(0, -1);
      this.clean();
      console.log("transferencia" +this.transferencia);
    }else if(letterE== "w"){
      this.saldo=this.saldo-parseInt(this.transferencia);
      alert("Transferencia realizada correctamente a : "+ this.nameCta+" con el monto de : "+ this.transferencia);
      this.clean();
    }
  }

  dataRetire(num){
    if(num == 0){
      alert("cuenta corriente")
    }else if(num == 1 ){
      this.changeState(0);
    }
  }

  passwordSave(){
    if(this.password == this.pass){
      alert("constraseña correcta")
      this.estado=0;
      this.logout();
      this.clean();
    }else if(this.password != this.pass){
      alert("Clave incorrecta");
      this.clean();
    }
  }


  changeState(num){
      this.show2=!this.show2;
      this.retire=!this.retire;
      console.log("saldo actual : " + this.saldo)
      if(num==0){
        this.option2=0;
      }else if(num==1){
        this.option2=1;
      }else if(num==2){
        this.option2=2;
      }
  }

  dataReset(){
    this.clean();
  }

  clean(){
    this.password=""; 
    this.password2="";
  }
  logout(){

    this.show=!this.show;
    this.show2=!this.show2;
  }
  logout2(){
    this.estado=1;
    this.show=!this.show;
    this.show2=!this.show2;
  }
  
}
