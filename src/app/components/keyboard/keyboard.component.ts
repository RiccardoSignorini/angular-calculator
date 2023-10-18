import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-keyboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {
  numbers: Number[];
  operators: string[];

  constructor()
  {
    this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    this.operators = ['+', '*', '-', '/', '=']
  }

}
