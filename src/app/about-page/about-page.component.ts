import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
  animations: [
    trigger('aboutState', [
      transition('void => active', [
        style({transform: 'translateX(100%) scale(1)'}),
        animate(300)
      ])
    ])
  ]
})
export class AboutPageComponent implements OnInit {
  public state: string;

  public aboutText: string;

  constructor() { }

  ngOnInit() {
    this.state = 'active';

    this.aboutText = "I would like to start off by saying thank you for everybody that helped form Zena Flowers."
    + "My name is Zena Ledoux and I first started making floral arrangements about 25 years ago in my home country of Guyana."
    + "Starting with real flowers and eventually gravitating to silk arrangements, I have formed my craft to meet all needs."
    + "If you have any questions about any of my products or if you would like to request a unique arrange please see my contact page"
    + "Thank you everybody and enjoy Zena Flowers!";
  }
}