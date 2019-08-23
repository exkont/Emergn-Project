import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-back',
  templateUrl: './button-back.component.html',
  styles: []
})
export class ButtonBackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openEnterForm()
  {
    window.open(`http://localhost:4200`, "_self");
  }

}
