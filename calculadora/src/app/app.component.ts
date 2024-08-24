import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CalculadoraOperacionesComponent } from './calculadora-operaciones/calculadora-operaciones.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CalculadoraOperacionesComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculadora';
  result:number=0;
  firstValue:number=0;
  secondValue:number=0;
  
  changeResult(numero:number){
    this.result=numero;
  }
}
