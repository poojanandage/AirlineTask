import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-checked-in',
  templateUrl: './total-checked-in.component.html',
  styleUrls: ['./total-checked-in.component.scss']
})
export class TotalCheckedInComponent implements OnInit {
@Input() getArrFromAirline : any;
public passengers! : string;
 
  constructor() { }

  ngOnInit(): void {
    let count = this.getArrFromAirline.filter((ele :any) =>{
      return ele.checkedIn;
   })
   this.passengers = count.length
  }
//   getCount(){
//     let count = this.getArrFromAirline.filter((ele :any) =>{
//    return ele.checkedIn;
// })
// this.passengers = count.length
//   }

}
