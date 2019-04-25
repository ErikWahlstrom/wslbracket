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
  tier1Limit = 4;
  tier2Limit = 8;
  tier3Limit = 26;

  constructor() {
    this.surfers = [
      new Surfer('Michel Bourez', 10, 2),
      new Surfer('Gabriel Medina', 1, 1),
      new Surfer('Italo Ferreira', 4, 1),
      new Surfer('Owen Wright', 2, 1),
      new Surfer('Jadson Andre', 23, 2),
      new Surfer('Julian Wilson', 3, 1), ];
  }

  ngOnInit() {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.surfers, event.previousIndex, event.currentIndex);
      for (let index = 0; index < this.surfers.length; index++) {
        const rank = index + 1;
        const surfer = this.surfers[index];
        surfer.rank = rank;
        if (rank <= this.tier1Limit) {
          surfer.tier = 1;
        } else if (rank <= this.tier2Limit) {
          surfer.tier = 2;
        } else if (rank <= this.tier3Limit) {
          surfer.tier = 3;
        } else {
          surfer.tier = 4;
        }
      }
    }
  }
}


