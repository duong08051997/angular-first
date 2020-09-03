import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
color: string;
result: string;
month: string;
  months = ['Tháng 1', 'Tháng 2', 'Tháng 3',
    'Tháng 4', 'Tháng 5', 'Tháng 6',
    'Tháng 7', 'Tháng 8', 'Tháng 9',
    'Tháng 10', 'Tháng 11', 'Tháng 12'];
  constructor() { }
  ngOnInit(): void {
  }

}
