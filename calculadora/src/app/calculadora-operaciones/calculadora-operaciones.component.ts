import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora-operaciones',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-operaciones.component.html',
  styleUrl: './calculadora-operaciones.component.css'
})
export class CalculadoraOperacionesComponent {
  @Input() primerValor:number=0;
  @Input() segundoValor:number=0;

  resultado:number=0;

  @Output() resultadoSent= new EventEmitter<number>();
  
  clickMas(event:any){
    this.resultado=this.primerValor+this.segundoValor;
    this.resultadoSent.emit(this.resultado);
  }


  clickMenos(event:any){
    this.resultado=this.primerValor-this.segundoValor;
    this.resultadoSent.emit(this.resultado);
  }


  clickPor(event:any){
    this.resultado=this.primerValor*this.segundoValor;
    this.resultadoSent.emit(this.resultado);
  }

  clickPot(event:any){
    for (let index = 0; index < this.segundoValor; index++) {
      this.resultado += (this.primerValor*this.primerValor);
    }
    this.resultadoSent.emit(this.resultado);
  }

  clickRaiz(event:any){
    for (let index = 0; index < this.segundoValor; index++) {
      this.resultado += (this.primerValor/this.primerValor);
    }
    this.resultadoSent.emit(this.resultado);
  }

  clickDivision(event:any){
    this.resultado=this.primerValor/this.segundoValor;
    this.resultadoSent.emit(this.resultado);
  }
}
