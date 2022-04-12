import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newQuote = new Quote(0, '', '', '', new Date());
  @Output() addQuote = new EventEmitter<Quote>();  submitQuote() {
    this.addQuote.emit(this.newQuote); this.submitQuote();
    {
      
    this.addQuote.emit(this.newQuote);
  }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
