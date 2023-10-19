import { OperationsService } from './services/operations.service';
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

  constructor
  (
    private _operationsService: OperationsService
  ) 
  {
    this.operatore1 = NaN;
    this.operatore2 = NaN;
    this.operation = '';
    this.result = 0;
    this.showDisplay = '';
  }

  showNumberOnDisplay(numero: number) 
  {
    if (this.operation == '') 
    {
      this.operatore1 = numero;
      this.showDisplay = this.operatore1.toString();
      console.log(this.operatore1, 'operatore1');
    }
    else 
    {
      this.operatore2 = numero;
      this.showDisplay = this.operatore2.toString();
      console.log(this.operatore2, 'operatore2');
    }
  }

  doOperation(operatore: string): void 
  {
    if (operatore == '=') 
    {
      switch (this.operation) 
      {
        case "+":
          this.result = this._operationsService.sum(this.operatore1, this.operatore2)
          break;

        case "-":
          this.result = this._operationsService.substract(this.operatore1, this.operatore2)
          break;

        case "*":
          this.result = this._operationsService.multiply(this.operatore1, this.operatore2)
          break;

        case "/":
          this.result = this._operationsService.divide(this.operatore1, this.operatore2)
          break;

        default:
          console.error("Operazione non valida", this.operation)
          break;
      }

      if (isNaN(this.operatore2)) 
      {
        this.result = this.operatore1;
      }

      this.showDisplay = this.result.toString();
      this.emptyOperation();
    }
    else 
    {
      this.operation = operatore;
      console.log(this.operation, 'operation');
    }
  }

  emptyOperation(): void
  {
    this.operatore1 = this.result;
    this.operatore2 = NaN;
    this.operation = '';
  }

  // showOperatorOnDisplay(operatore: string) 
  // {
  //   if (operatore == '=') 
  //   {
  //     if (this.operation == '+') 
  //     {
  //       this.result = this.operatore1 + this.operatore2;
  //       this.showDisplay = this.result.toString();
  //       console.log(this.result);
  //     }
  //     // else if (this.operation == '-')
  //     // {
  //     //   this.result =
  //     // }
  //     // else if (this.operation == '*')
  //     // {
  //     //   this.result =
  //     // }
  //     // else if (this.operation == '/')
  //     // {
  //     //   this.result =
  //     // }
  //     this.operation = '';
  //   }
  //   else 
  //   {
  //     this.operation = operatore;
  //     console.log(this.operation, 'operation');
  //   }
  // }
}
