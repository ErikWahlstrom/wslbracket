import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Surfer } from '../modeldata/Surfer';

@Component({
  selector: 'app-surfer',
  templateUrl: './surfer.component.html',
  styleUrls: ['./surfer.component.scss']
})
export class SurferComponent implements OnInit {
    @Input() public surfer: Surfer;
  x: number;
  y: number;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit( ) {
    this.x = Math.max(this.elRef.nativeElement.getBoundingClientRect().left, 0);
    this.y = Math.max(this.elRef.nativeElement.getBoundingClientRect().top, 0);
  }
}
