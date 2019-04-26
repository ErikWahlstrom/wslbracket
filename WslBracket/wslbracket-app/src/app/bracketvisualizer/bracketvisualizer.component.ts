import { Component, OnInit } from '@angular/core';
import { Surfer, SeedingBracket, HeatSurfer } from '../modeldata/Surfer';
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
      new Surfer('Gabriel Medina'),
      new Surfer('Julian Wilson'),
      new Surfer('Felipe Toledo'),
      new Surfer('Italo Ferreira'),
      new Surfer('Jordy Smith'),
      new Surfer('Owen Wright'),
      new Surfer('Connor Coffin'),
      new Surfer('Michel Bourez'),
      new Surfer('Wade Carmichael'),
      new Surfer('Kanoa Igarashi'),
      new Surfer('Kolohe Andino'),
      new Surfer('Mikey Wright'),
      new Surfer('Willian Cardoso'),
      new Surfer('Sebastian Zietz'),
      new Surfer('Michael Rodrigues'),
      new Surfer('Jeremy Flores'),
      new Surfer('Adrian Buchan'),
      new Surfer('Griffin Colapinto'),
      new Surfer('Adriano de Souza'),
      new Surfer('Ezekiel Lau'),
      new Surfer('Yago Dora'),
      new Surfer('Joan Duru'),
      new Surfer('Kelly Slater'),
      new Surfer('Ryan Callinan'),
      new Surfer('Jadson Andre'),
      new Surfer('Soli Bailey'),
      new Surfer('Jack Freestone'),
      new Surfer('Caio Ibelli'),
      new Surfer('Reef Heazlewood'),
      new Surfer('Mateus Herdy'),
      new Surfer('Jadson Andre'),
      new Surfer('Leonardi Fiorivanti'),
      new Surfer('Ricardo Christie'),
      new Surfer('Deivid Silva'),
      new Surfer('Jesse Mendes'),
      new Surfer('Peterson Crisanto'),
       ];
  }

  ngOnInit() {
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.surfers, event.previousIndex, event.currentIndex);
      this.SetRankings();
    }
    this.GenerateSeeding();
  }

  SetRankings() {
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

  GenerateSeeding() {
    this.seedingBracket = new SeedingBracket(this.surfers);
    }

  onDropSeed(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      const arrayWithData = event.container.data;
       moveItemInArray(arrayWithData, event.previousIndex, event.currentIndex);
       for (let index = 0; index < arrayWithData.length; index++) {
        const rank = index + 1;
        (arrayWithData[index] as unknown as HeatSurfer).heatRank = rank;
      }
    }
  }
}


