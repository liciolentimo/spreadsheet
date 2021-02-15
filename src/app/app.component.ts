import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'spreadsheet'; 

  firstNumber : string;
  lastNumber : string;
  firstNumber2 : string;
  lastNumber2 : string;
  firstNumber3 : string;
  lastNumber3 : string;
  firstNumber4 : string;
  lastNumber4 : string;
  result : number;
  result2 : number;
  result3 : number;
  result4 : number;
  addNumber(){
    this.result = parseInt(this.firstNumber) + parseInt(this.lastNumber);
  }
  subtractNumber(){
    this.result2 = parseInt(this.firstNumber2) - parseInt(this.lastNumber2);
  }
  multiplyNumber(){
    this.result3 = parseInt(this.firstNumber3) * parseInt(this.lastNumber3);
  }
  divideNumber(){
    this.result4 = parseInt(this.firstNumber4) / parseInt(this.lastNumber4);
  }

}