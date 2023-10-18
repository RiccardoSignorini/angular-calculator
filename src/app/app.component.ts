import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from './components/display/display.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DisplayComponent, KeyboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  operatore1: number;
  operatore2: number;
  operation: string;
  result: number;
  showDisplay: string;

  constructor()
  {
    this.operatore1 = 0;
    this.operatore2 = 0;
    this.operation = '';
    this.result = 0;
    this.showDisplay = '';
  }

  showNumberOnDisplay(numero: number)
  {
    if (this.operation == '')
    {
      this.operatore1 = numero;
      console.log(this.operatore1, 'operatore1');  
    }
    else
    {
      this.operatore2 = numero;
      console.log(this.operatore2, 'operatore2');  
    }
  }

  showOperatorOnDisplay(operatore: string)
  {
    if (operatore == '=')
    {
      if (this.operation == '+')
      {
        this.result = this.operatore1 + this.operatore2;
        console.log(this.result);
      }
      // else if (this.operation == '-')
      // {
      //   this.result =
      // }
      // else if (this.operation == '*')
      // {
      //   this.result =
      // }
      // else if (this.operation == '/')
      // {
      //   this.result =
      // }
      this.operation = '';
    }
    else
    {
      this.operation = operatore;
      console.log(this.operation, 'operation');
    }
  }
}
