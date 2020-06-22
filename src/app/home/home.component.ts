import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countClicks : number = 0;
  name:String;
  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.countClicks += 1; 
  }
  getClasses(){
    let classes = {
      active : this.countClicks > 3 , //not active and not active are scss classes
      notactive : this.countClicks<=3

    }
     return classes;
  }
}
