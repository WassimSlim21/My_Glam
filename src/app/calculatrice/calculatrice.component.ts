import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {
  equation: string;
  result: any;
  constructor() { }

  ngOnInit() {
    this.equation = "";
    this.result=0;
  }
pressKey(x) {
this.equation += x;
}
getAnswer() {
  this.equation = eval(this.equation);

}

allClear(){
  this.equation="";
}

}
