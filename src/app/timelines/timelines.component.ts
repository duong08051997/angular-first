import { Component, OnInit } from '@angular/core';
import {DateUtilService} from "../../../../demo-angular/demo-font-size/src/app/date-util.service";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  output = '';
  constructor(private dateUtilService: DateUtilService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onChange(event){
    this.output = this.dateUtilService.getDiffToNow(event.target.value);
  }

}
