import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Surfer } from '../modeldata/Surfer';

@Component({
  selector: 'app-surfer',
  templateUrl: './surfer.component.html',
  styleUrls: ['./surfer.component.scss']
})
export class SurferComponent implements OnInit {
    @Input() public surfer: Surfer;
    @ViewChild('ElementRefName') element: ElementRef;
  x: number;
  y: number;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit( ) {
    this.x = this.elRef.nativeElement.getBoundingClientRect().left;
    this.y = this.elRef.nativeElement.getBoundingClientRect().top;
  }
}
