import { Component, Input, OnInit } from '@angular/core';
import { Surfer } from '../modeldata/Surfer';

@Component({
  selector: 'app-surfer',
  templateUrl: './surfer.component.html',
  styleUrls: ['./surfer.component.scss']
})
export class SurferComponent implements OnInit {
  @Input() public surfer: Surfer;

  constructor() {
  }

  ngOnInit( ) {
  }
}
