import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyC40jrkLKJ8CijdgSfneFJ-oHuArG3Ucr8",
      authDomain: "rentcar-ee2be.firebaseapp.com"
    });
  }
}
