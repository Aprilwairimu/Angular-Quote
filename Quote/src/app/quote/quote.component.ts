import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { quote: 'You must be the change you wish to see in the world.', sender:'April',Author:'Mahatma Ghandi',votes:0 },
    {quote:'Genius is one percent inspiration and ninety-nine percent perspiration',sender:'Negan',Author:'Thomas Edison',votes:0 },
    { quote: 'If at first you don’t succeed, try, try again.', sender: 'Sara', Author: 'W.E Hickson', votes: 0 },
    { quote: 'If at first you don’t succeed, try, try again.', sender: 'Sara', Author: 'W.E Hickson', votes: 0 },
    {quote: 'If at first you don’t succeed, try, try again.',sender:'Sara',Author:'W.E Hickson',votes:0 },
  ];
   votescount: number = 0;
  functionlike() {
    this.votescount++;
  }
  functiondislike() {
    this.votescount--;
  }
  functiondelete(i:any) {
    this.quotes.splice(i);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
