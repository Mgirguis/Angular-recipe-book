import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAlPPzF3z_ugAYYEeGHTNFH4133r5FXMEc',
      authDomain: 'ng-recipe-book-4ae35.firebaseapp.com'
    })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
