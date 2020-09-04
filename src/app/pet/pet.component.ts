import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
color = 'red';
  constructor() {
    this.fontSize = '';
  }
  petName = 'Lực';
  petImage = 'data:image/jpeg;base64,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';
  @ViewChild('para', { static: true }) para: ElementRef;
  fontSize: string;
  // tslint:disable-next-line:typedef
  fontSizeAuto(value){
    this.fontSize = value.target.value;
    console.log(this.fontSize);
  }
  // tslint:disable-next-line:typedef
  changeImg(img){
img.srcElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMo5OLeF17v9hSg7vWHCU5j4YXuuLg58Nqzg&usqp=CAU';
  }
  // tslint:disable-next-line:typedef
  changImg2(img){
    img.srcElement.src = 'data:image/jpeg;base64,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';
  }
}
