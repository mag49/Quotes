import { Component, OnInit } from '@angular/core';
import {Quote}from'../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'William shakespeare','Coins always make sound, but currency notes are always silent', 'Jane Doe', new Date (2020,4,1)),
    new Quote(3,'Adolf Hitler', 'When your in light, everything follows you', 'Mary jane', new Date(2020,1,2)),
    new Quote(4,'Napoleon Bonaparte', 'The world suffers alot because of the silence of good people', 'Tehila jones', new Date(2019,12,26)),
    new Quote(5,'Abraham Lincoln', 'If friendship is your weakest point, your the strongest person in the world', 'Meghan may', new Date(2020,8,1)),
    new Quote(6,'Mike Ditka', 'Your never a loser until you quit trying', 'Mary jane', new Date(2020,3,1)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
      this.quotes.splice(index,1);
      }
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}
