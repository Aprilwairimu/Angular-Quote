import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(0 ,'You must be the change you wish to see in the world.','April ','Mahatma Ghandi' ,new Date (2022,1,4)),
    new Quote(1,'Genius is one percent inspiration and ninety-nine percent perspiration','Negan','Thomas Edison',new Date (2022,0,4)),
   new Quote (2,'If at first you don’t succeed, try, try again.', 'Sarah', 'W.E Hickson',new Date (2022,2,11)),
   new Quote (3,'“It is only when they go wrong that machines remind you how powerful they are.”','Frank Lloyd','Clive James',new Date (2022,2,12)),
  ];
  // votelikes: number = 0
  // votedislikes :number=0
  // functionlike() {
  //   this.votelikes++;
  // }
  // functiondislike() {
  //   this.votedislikes++;
  // }
  // functiondelete(i:any) {
  //   this.quotes.splice(i);
  // }

  functionLike(index: number) {
    this.quotes[index].voteLikes++; 
    
  }  functionDislike(index: number) {
    this.quotes[index].voteDislikes++;

  }  functionDelete(i: any) {
    this.quotes.splice(i, 1);
  } 

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.votes= quoteLength + 1;
    quote.postDate = new Date(quote.postDate);
    this.quotes.push(quote);
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
