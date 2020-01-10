import { Component } from '@angular/core';
import {Quote} from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    new Quote(1,'William shakespeare','Coins always make sound, but currency notes are always silent', 'Margaret ngethe', new Date (4,1,2020)),
  ];
}
