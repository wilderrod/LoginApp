import { Component,OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit{
  title = 'LoginApp';

constructor(private af: AngularFireDatabase) {}
ngOnInit() {
  // ...
}
}