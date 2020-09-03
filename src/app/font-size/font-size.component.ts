import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent  {

  fontSize: number;

  constructor() {
    this.fontSize = 0;
  }
  @ViewChild('para', { static: true }) para: ElementRef;
  // tslint:disable-next-line:typedef
  fontSizeAuto(value){
    this.fontSize = value;
    (this.para.nativeElement as HTMLParagraphElement).style.fontSize = `${this.fontSize}px`;
  }

}
