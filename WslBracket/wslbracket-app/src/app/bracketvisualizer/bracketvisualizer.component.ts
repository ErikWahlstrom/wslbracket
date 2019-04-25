import { Component, OnInit } from '@angular/core';
import { Surfer } from './Surfer';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bracketvisualizer',
  templateUrl: './bracketvisualizer.component.html',
  styleUrls: ['./bracketvisualizer.component.scss']
})
export class BracketvisualizerComponent implements OnInit {
  surfers: Surfer[];
  rankedSurfers: Surfer[];

  constructor() {
    this.surfers = [
      new Surfer('Michel Bourez', 10),
      new Surfer('Gabriel Medina', 1),
      new Surfer('Julian Wilson', 3), ];
  }

  ngOnInit() {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      const datat = event.container.data;
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}


