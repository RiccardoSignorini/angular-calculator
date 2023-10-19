import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  numbers: number[];
  operators: string[];

  @Output() showOnDisplay: EventEmitter<string>;
  @Output() showOperatorOnDisplay: EventEmitter<string>;

  constructor()
  {
    this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.operators = ['+', '*', '-', '/', '=']
    this.showOnDisplay = new EventEmitter<string>();
    this.showOperatorOnDisplay = new EventEmitter<string>();
  }

  showNumber(num: number)
  {
    this.showOnDisplay.emit(num.toString());
  }

  showOperator(operator: string)
  {
    this.showOperatorOnDisplay.emit(operator);
  }
}
