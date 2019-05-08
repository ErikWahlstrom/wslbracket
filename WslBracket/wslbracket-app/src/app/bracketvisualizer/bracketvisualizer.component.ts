import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Surfer, SeedingBracket, HeatSurfer, LosersBracket, RoundOf32, surfEvents } from '../modeldata/Surfer';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SurferComponent } from '../surfer/surfer.component';
import { LineCoordinates, Coords } from './lineCoordinates';

@Component({
  selector: 'app-bracketvisualizer',
  templateUrl: './bracketvisualizer.component.html',
  styleUrls: ['./bracketvisualizer.component.scss']
})

export class BracketvisualizerComponent implements OnInit, AfterViewInit {
  @ViewChildren(SurferComponent) childrenSurf!: QueryList<SurferComponent>;
  surfers: Surfer[];
  seedingBracket!: SeedingBracket;
  tier1Limit = 4;
  tier2Limit = 12;
  tier3Limit = 19;
  goldCoastEnumVal = surfEvents.GoldCoast;
  bellsEnumVal = surfEvents.BellsBeach;
  nextEventEnumVal = surfEvents.NextEvent;
  losersRound!: LosersBracket;
  roundOf32!: RoundOf32;
  selectedEvent = surfEvents.BellsBeach;
  allSurferViews!: SurferComponent[];
  lineCoordArr: LineCoordinates[] = [new LineCoordinates([new Coords(1, 1)], false)];
  selectedSurfer?: Surfer = undefined;
  getBellsBeachSurfers(): Surfer[] {
    return [
      new Surfer('Gabriel bells Medina', 13.7),
      new Surfer('Julian Wilson', 13.73),
      new Surfer('Italo Ferreira', 10.06),
      new Surfer('Filipe Toledo', 15.87),
      new Surfer('Jordy Smith', 10.26),
      new Surfer('Owen Wright', 8.2),
      new Surfer('Conner Coffin', 10.77),
      new Surfer('Kolohe Andino', 10.77),
      new Surfer('Wade Carmichael', 8.04),
      new Surfer('Michel Bourez', 10.6),
      new Surfer('John John Florence', 13),
      new Surfer('Kanoa Igarashi', 10.46),
      new Surfer('Mikey Wright', 9.33),
      new Surfer('Willian Cardoso', 7.67),
      new Surfer('Reef Heazlewood', 10.34, 35),
      new Surfer('Yago Dora', 10.1),
      new Surfer('Seth Moniz', 8.67),
      new Surfer('Michael Rodrigues', 9.56),
      new Surfer('Jeremy Flores', 9.97),
      new Surfer('Adrian Buchan', 8.07),
      new Surfer('Xavier Huxtable', 10.23, 36),
      new Surfer('Ezekiel Lau', 10.57),
      new Surfer('Joan Duru', 11),
      new Surfer('Ryan Callinan', 13),
      new Surfer('Peterson Crisanto', 10.87),
      new Surfer('Jesse Mendes', 7.53),
      new Surfer('Deivid Silva', 10.67),
      new Surfer('Ricardo Christie', 11.83),
      new Surfer('Soli Bailey', 8.37),
      new Surfer('Leonardi Fiorivanti', 10.6),
      new Surfer('Jadson Andre', 12.23),
      new Surfer('Jack Freestone', 7.84),
      new Surfer('Kelly Slater', 10.63),
      new Surfer('Caio Ibelli', 9.73),
      new Surfer('Jacob Willcox', 13.74),
      new Surfer('Harrison Mann', 7.87),
    ];
  }

  getNextSurfers(): Surfer[] {
    return [
      new Surfer('Gabriel next Medina'),
      new Surfer('Julian Wilson'),
      new Surfer('Filipe Toledo'),
      new Surfer('Italo Ferreira'),
      new Surfer('Jordy Smith'),
      new Surfer('Owen Wright'),
      new Surfer('Conner Coffin'),
      new Surfer('Michel Bourez'),
      new Surfer('Wade Carmichael'),
      new Surfer('Kanoa Igarashi'),
      new Surfer('Kolohe Andino'),
      new Surfer('Mikey Wright'),
      new Surfer('John John Florence'),
      new Surfer('Willian Cardoso'),
      new Surfer('Sebastian Zietz'),
      new Surfer('Michael Rodrigues'),
      new Surfer('Jeremy Flores'),
      new Surfer('Adrian Buchan'),
      new Surfer('Griffin Colapinto'),
      new Surfer('Ezekiel Lau'),
      new Surfer('Yago Dora'),
      new Surfer('Joan Duru'),
      new Surfer('Seth Moniz'),
      new Surfer('Ryan Callinan'),
      new Surfer('Peterson Crisanto'),
      new Surfer('Jesse Mendes'),
      new Surfer('Deivid Silva'),
      new Surfer('Ricardo Christie'),
      new Surfer('Leonardi Fiorivanti'),
      new Surfer('Jadson Andre'),
      new Surfer('Soli Bailey'),
      new Surfer('Jack Freestone'),
      new Surfer('Kelly Slater'),
      new Surfer('Caio Ibelli'),
      new Surfer('Someone next'),
      new Surfer('Next surfare'),
    ];
  }

  getGoldCoastSurfers(): Surfer[] {
    return [
      new Surfer('Gabriel guld Medina'),
      new Surfer('Julian Wilson'),
      new Surfer('Filipe Toledo'),
      new Surfer('Italo Ferreira'),
      new Surfer('Jordy Smith'),
      new Surfer('Owen Wright'),
      new Surfer('Conner Coffin'),
      new Surfer('Michel Bourez'),
      new Surfer('Wade Carmichael'),
      new Surfer('Kanoa Igarashi'),
      new Surfer('Kolohe Andino'),
      new Surfer('Mikey Wright'),
      new Surfer('John John Florence'),
      new Surfer('Willian Cardoso'),
      new Surfer('Sebastian Zietz'),
      new Surfer('Michael Rodrigues'),
      new Surfer('Jeremy Flores'),
      new Surfer('Adrian Buchan'),
      new Surfer('Griffin Colapinto'),
      new Surfer('Ezekiel Lau'),
      new Surfer('Yago Dora'),
      new Surfer('Joan Duru'),
      new Surfer('Seth Moniz'),
      new Surfer('Ryan Callinan'),
      new Surfer('Peterson Crisanto'),
      new Surfer('Jesse Mendes'),
      new Surfer('Deivid Silva'),
      new Surfer('Ricardo Christie'),
      new Surfer('Leonardi Fiorivanti'),
      new Surfer('Jadson Andre'),
      new Surfer('Soli Bailey'),
      new Surfer('Jack Freestone'),
      new Surfer('Kelly Slater'),
      new Surfer('Caio Ibelli'),
      new Surfer('Reef Heazlewood'),
      new Surfer('Mateus Herdy'),
    ];
  }

  ngOnInit() {
    this.setInitialValues();
  }

  public setInitialValues() {
    if (this.selectedEvent === surfEvents.GoldCoast) {
      this.setInitialValuesGc();
    }
    if (this.selectedEvent === surfEvents.BellsBeach) {
      this.setInitialValuesBb();
    }

    if (this.selectedEvent === surfEvents.NextEvent) {
      this.setInitialValuesNext();
    }

  }

  public setInitialValuesGc() {
    this.surfers = this.getGoldCoastSurfers();
    this.SetRankings();
    this.GenerateSeeding();
    this.RerankHeatsGc();
    this.GenerateLosersRound();
    this.RerankLosersGc();
    this.GenerateR32();
  }

  public setInitialValuesNext() {
    this.surfers = this.getNextSurfers();
    this.SetRankings();
    this.GenerateSeeding();
  }

  public setInitialValuesBb() {
    this.surfers = this.getBellsBeachSurfers();
    this.SetRankings();
    this.GenerateSeeding();
    this.RerankHeatsBb();
    this.GenerateLosersRound();
    this.RerankLosersBb();
    this.GenerateR32();
  }

  ngAfterViewInit(): void {
    this.childrenSurf.changes.subscribe(list => {
      setTimeout(() => this.setSurferLines(list.toArray()));
    });
    setTimeout(() => this.setSurferLines(this.childrenSurf.toArray()));
  }

  setSurferLines(list: SurferComponent[]) {
    if (list === undefined) {
      return;
    }
    this.lineCoordArr = [new LineCoordinates([new Coords(1, 1)], false)];
    this.allSurferViews = list;
    this.surfers.forEach(x => {
      this.lineCoordArr.push(
        new LineCoordinates(
          this.allSurferViews.filter(y => y.surfer.name === x.name)
            .map(viewSurfer => (
              {
                x: viewSurfer.elRef.nativeElement.getBoundingClientRect().left + window.pageXOffset,
                y: viewSurfer.elRef.nativeElement.getBoundingClientRect().top + window.pageYOffset,
              })), this.selectedSurfer === x));
    });
  }

  GenerateLosersRound() {
    this.losersRound = new LosersBracket(this.seedingBracket);
  }

  GenerateR32() {
    this.roundOf32 = new RoundOf32(this.seedingBracket, this.losersRound);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.surfers, event.previousIndex, event.currentIndex);
      this.selectedSurfer = this.surfers[event.currentIndex];
      this.SetRankings();
    }
    this.GenerateSeeding();
  }

  SetRankings() {
    for (let index = 0; index < this.surfers.length; index++) {
      const replacementSurfers = this.surfers.filter(x => x.actualRank !== undefined && x.actualRank < (index + 1)).length;
      const rank = index + 1 + replacementSurfers;
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

  RerankLosersGc() {
    this.losersRound.heats.forEach(heat => {
      switch (heat.heatnumber) {
        case 1:
          moveItemInArray(heat.heatSurfers, 2, 0);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 2:
          break;
        case 3:
          break;
        case 4:
          break;
      }
    });
  }

  RerankLosersBb() {
    this.losersRound.heats.forEach(heat => {
      switch (heat.heatnumber) {
        case 1:
          break;
        case 2:
          moveItemInArray(heat.heatSurfers, 0, 1);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 3:
          moveItemInArray(heat.heatSurfers, 2, 0);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 4:
          moveItemInArray(heat.heatSurfers, 1, 2);
          this.ReorderHeat(heat.heatSurfers);
          break;
      }
    });
  }

  RerankHeatsGc() {
    this.seedingBracket.heats.forEach(heat => {
      switch (heat.heatnumber) {
        case 1:
          moveItemInArray(heat.heatSurfers, 2, 0);
          moveItemInArray(heat.heatSurfers, 1, 2);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 2:
          moveItemInArray(heat.heatSurfers, 0, 2);
          moveItemInArray(heat.heatSurfers, 0, 1);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 3:
          moveItemInArray(heat.heatSurfers, 0, 1);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 4:
          moveItemInArray(heat.heatSurfers, 0, 1);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 5:
          moveItemInArray(heat.heatSurfers, 0, 2);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 6:
          break;
        case 7:
          this.ReorderHeat(heat.heatSurfers);
          moveItemInArray(heat.heatSurfers, 0, 1);
          break;
        case 8:
          break;
        case 9:
          moveItemInArray(heat.heatSurfers, 0, 1);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 10:
          moveItemInArray(heat.heatSurfers, 1, 2);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 11:
          moveItemInArray(heat.heatSurfers, 1, 2);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 12:
          break;

        default:
          break;
      }
    });
  }

  RerankHeatsBb() {
    this.seedingBracket.heats.forEach(heat => {
      switch (heat.heatnumber) {
        case 1:
          moveItemInArray(heat.heatSurfers, 2, 0);
          moveItemInArray(heat.heatSurfers, 1, 2);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 2:
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 3:
          moveItemInArray(heat.heatSurfers, 1, 2);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 4:
          moveItemInArray(heat.heatSurfers, 0, 1);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 5:
          moveItemInArray(heat.heatSurfers, 2, 0);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 6:
          break;
        case 7:
          moveItemInArray(heat.heatSurfers, 1, 2);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 8:
          break;
        case 9:
          moveItemInArray(heat.heatSurfers, 2, 0);
          moveItemInArray(heat.heatSurfers, 1, 2);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 10:
          moveItemInArray(heat.heatSurfers, 2, 0);
          this.ReorderHeat(heat.heatSurfers);
          break;
        case 11:
          break;
        case 12:
          moveItemInArray(heat.heatSurfers, 2, 0);
          this.ReorderHeat(heat.heatSurfers);
          break;
        default:
          break;
      }
    });
  }

  onDropSeed(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      const arrayWithData = event.container.data;
      moveItemInArray(arrayWithData, event.previousIndex, event.currentIndex);
      this.ReorderHeat(arrayWithData as unknown as HeatSurfer[]);
      this.GenerateLosersRound();
      this.GenerateR32();
    }
  }

  ReorderHeat(arrayWithData: HeatSurfer[]) {
    for (let index = 0; index < arrayWithData.length; index++) {
      const rank = index + 1;
      arrayWithData[index].heatRank = rank;
    }
  }

  GetPoints(linecorr: LineCoordinates) {
    let retString = '';
    linecorr.lineCoords.forEach(x => {
      retString = retString + ' ' + x.x + ',' + x.y;
    });
    return retString;
  }

  public selectSurfer(surfer: Surfer) {
    this.selectedSurfer = surfer;
    this.setSurferLines(this.allSurferViews);
  }
}
