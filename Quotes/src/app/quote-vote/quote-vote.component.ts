import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-vote',
  templateUrl: './quote-vote.component.html',
  styleUrls: ['./quote-vote.component.css']
})
export class QuoteVoteComponent implements OnInit {
  upVotes= 0;
  downVotes= 0;

  constructor() {
  }

  @Input() quote: Quote;
  @Output() Upvote = new EventEmitter();

  ngOnInit() {
  }

  likeButtonClick() {
    this.Upvote.emit(this.upVotes);
    this.upVotes++;
  }

  dislikeButtonClick() {
    this.downVotes++;
  }
}