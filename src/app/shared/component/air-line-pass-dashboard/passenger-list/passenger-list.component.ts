// import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-passenger-list',
  templateUrl: './passenger-list.component.html',
  styleUrls: ['./passenger-list.component.scss']
})
export class PassengerListComponent implements OnInit {
@Input() getObj : any;
@Output() sendData : EventEmitter<any> = new EventEmitter<any>;
public flag : boolean = true;
  constructor() { }

  ngOnInit(): void {
    
  }
  onEdit(eve : any){
    this.flag = !this.flag
  }
  onDone(eve : any){
    this.flag = !this.flag
  }
  onRemove(eve : any){
    console.log(eve);
    this.sendData.emit(this.getObj)
  }
  onInput(e : any){
    console.log(e);
    
    this.getObj.fullname = e.target.value;
  }

}
