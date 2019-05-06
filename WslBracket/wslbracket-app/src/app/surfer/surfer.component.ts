import { Component, Input, ElementRef } from '@angular/core';
import { Surfer } from '../modeldata/Surfer';

@Component({
  selector: 'app-surfer',
  templateUrl: './surfer.component.html',
  styleUrls: ['./surfer.component.scss']
})
export class SurferComponent {
    @Input() public surfer!: Surfer;
    selected = false;
  constructor(public elRef: ElementRef) {
  }
}
