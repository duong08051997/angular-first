import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Output() keyword = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  getKeywordSearch(event){
    const value = event.target.value.toLowerCase();
    this.keyword.emit(value);
  }

}
