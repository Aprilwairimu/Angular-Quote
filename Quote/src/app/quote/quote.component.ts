import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { quote: 'You must be the change you wish to see in the world.', sender:'April',Author:'Mahatma Ghandi',votes:0 , postdate:new Date (2022,10,4)},
    {quote:'Genius is one percent inspiration and ninety-nine percent perspiration',sender:'Negan',Author:'Thomas Edison',votes:0, postdate:new Date (2022,10,4)},
    { quote: 'If at first you don’t succeed, try, try again.', sender: 'Sara', Author: 'W.E Hickson', votes: 0, postdate:new Date (2022,10,3) },
    { quote: 'If at first you don’t succeed, try, try again.', sender: 'Sara', Author: 'W.E Hickson', votes: 0, postdate:new Date (2022,10,2) },
    {quote: 'If at first you don’t succeed, try, try again.',sender:'Sara',Author:'W.E Hickson',votes:0, postdate:new Date (2022,10,1)},
  ];
   votescount: number = 0;
  functionlike() {
    this.votescount++;
  }
  functiondislike() {
    this.votescount--;
  }
  functiondelete(i:any) {
    this.quotes.pop();
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
