import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculate: string;
  number1: number;
  number2: number;
  result: number;
  // tslint:disable-next-line:typedef
  calculates(){
    switch (this.calculate){
      case 'plus':
        this.result = this.number1 + this.number2;
        break;
      case 'subtraction':
        this.result = this.number1 - this.number2;
        break;
      case 'multiplication':
        this.result = this.number1 * this.number2;
        break;
      case 'division':
        this.result = this.number1 / this.number2;
        break;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
