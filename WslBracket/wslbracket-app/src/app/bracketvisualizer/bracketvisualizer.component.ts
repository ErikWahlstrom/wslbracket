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
  seedingBracket: SeedingBracket;
  tier1Limit = 4;
  tier2Limit = 8;
  tier3Limit = 26;

  constructor() {
    this.surfers = [
      new Surfer('Michel Bourez', 10, 2),
      new Surfer('Gabriel Medina', 1, 1),
      new Surfer('Italo Ferreira', 4, 1),
      new Surfer('Owen Wright', 2, 1),
      new Surfer('Kolohe Andino', 15, 2),
      new Surfer('Ryan Callinan', 16, 2),
      new Surfer('Jadson Andre', 23, 2),
      new Surfer('Julian Wilson', 3, 1), ];
  }

  ngOnInit() {
  }

  GenerateSeeding() {
    this.seedingBracket = new SeedingBracket(this.surfers);
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

  onDropSeed(event: CdkDragDrop<string[]>) {
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

export class SeedingBracket {
  heat5: ThreeManHeat;
  heat6: ThreeManHeat;
  constructor(surfers: Surfer[]) {
    this.heat6 = new ThreeManHeat(6, surfers[0], surfers[4], surfers[5]);
    this.heat5 = new ThreeManHeat(1, surfers[5], surfers[6], surfers[7]);
  }
}

export class ThreeManHeat {
  heatnumber: number;
  surfers: HeatSurfer[];
  constructor(heatnumber: number, surfer1: Surfer, surfer2: Surfer, surfer3: Surfer) {
    this.heatnumber = heatnumber;
    this.surfers = [new HeatSurfer(1, surfer1), new HeatSurfer(2, surfer2), new HeatSurfer(3, surfer3)];
  }
}

export class HeatSurfer {
  heatRank: number;
  surfer: Surfer;
  constructor(heatRank: number, surfer: Surfer) {
    this.heatRank = heatRank;
    this.surfer = surfer;
  }
}


