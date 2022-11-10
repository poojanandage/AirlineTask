import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-air-line-pass-dashboard',
  templateUrl: './air-line-pass-dashboard.component.html',
  styleUrls: ['./air-line-pass-dashboard.component.scss']
})
export class AirLinePassDashboardComponent implements OnInit {
@Input() getArrFromApp! : any;
@Output() sendIdObj : EventEmitter<any> = new EventEmitter<any>;
  constructor() { }

  ngOnInit(): void {
  }
  onsendData(eve : any){
  this.sendIdObj.emit(eve)
  }

}
