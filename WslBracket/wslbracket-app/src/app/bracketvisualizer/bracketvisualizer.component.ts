import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { Surfer, SeedingBracket, HeatSurfer, LosersBracket, RoundOf32, surfEvents, ThreeManHeat } from '../modeldata/Surfer';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { SurferComponent } from '../surfer/surfer.component';
import { LineCoordinates, Coords } from './lineCoordinates';
import { headersToString } from 'selenium-webdriver/http';

@Component({
  selector: 'app-bracketvisualizer',
  templateUrl: './bracketvisualizer.component.html',
  styleUrls: ['./bracketvisualizer.component.scss']
})

export class BracketvisualizerComponent implements OnInit, AfterViewInit {
  @ViewChildren(SurferComponent) childrenSurf!: QueryList<SurferComponent>;
  surfers: Surfer[] = [new Surfer('Gabriel Medina')];
  seedingBracket!: SeedingBracket;
  tier1Limit = 4;
  tier2Limit = 12;
  tier3Limit = 24;
  goldCoastEnumVal = surfEvents.GoldCoast;
  bellsEnumVal = surfEvents.BellsBeach;
  keramasEventEnumVal = surfEvents.Keramas;
  margiesEventEnumVal = surfEvents.Margies;
  userEventEnumVal = surfEvents.User;
  losersRound!: LosersBracket;
  roundOf32!: RoundOf32;
  selectedEvent = surfEvents.Margies;
  allSurferViews!: SurferComponent[];
  lineCoordArr: LineCoordinates[] = [new LineCoordinates([new Coords(1, 1)], false)];
  selectedSurfer?: Surfer = undefined;
  private surfArrayKey = 'surferarray';
  getBellsBeachSurfers(): Surfer[] {
    return [
      new Surfer('Gabriel Medina'),
      new Surfer('Julian Wilson'),
      new Surfer('Italo Ferreira'),
      new Surfer('Filipe Toledo'),
      new Surfer('Jordy Smith'),
      new Surfer('Owen Wright'),
      new Surfer('Conner Coffin'),
      new Surfer('Kolohe Andino'),
      new Surfer('Wade Carmichael'),
      new Surfer('Michel Bourez'),
      new Surfer('John John Florence'),
      new Surfer('Kanoa Igarashi'),
      new Surfer('Mikey Wright'),
      new Surfer('Willian Cardoso'),
      new Surfer('Reef Heazlewood', 34),
      new Surfer('Yago Dora'),
      new Surfer('Seth Moniz'),
      new Surfer('Michael Rodrigues'),
      new Surfer('Jeremy Flores'),
      new Surfer('Adrian Buchan'),
      new Surfer('Xavier Huxtable', 35),
      new Surfer('Ezekiel Lau'),
      new Surfer('Joan Duru'),
      new Surfer('Ryan Callinan'),
      new Surfer('Peterson Crisanto'),
      new Surfer('Jesse Mendes'),
      new Surfer('Deivid Silva'),
      new Surfer('Ricardo Christie'),
      new Surfer('Soli Bailey'),
      new Surfer('Leonardi Fiorivanti'),
      new Surfer('Jadson Andre'),
      new Surfer('Jack Freestone'),
      new Surfer('Kelly Slater'),
      new Surfer('Caio Ibelli'),
      new Surfer('Jacob Willcox'),
      new Surfer('Harrison Mann', 36),
    ];
  }

  getKeramasSurfers(): Surfer[] {
    return [
      new Surfer('Gabriel Medina'),
      new Surfer('Filipe Toledo'),
      new Surfer('Italo Ferreira'),
      new Surfer('Julian Wilson'),
      new Surfer('Jordy Smith'),
      new Surfer('John John Florence'),
      new Surfer('Owen Wright'),
      new Surfer('Conner Coffin'),
      new Surfer('Kolohe Andino'),
      new Surfer('Wade Carmichael'),
      new Surfer('Kanoa Igarashi'),
      new Surfer('Michel Bourez'),
      new Surfer('Willian Cardoso'),
      new Surfer('Mikey Wright'),
      new Surfer('Seth Moniz'),
      new Surfer('Ryan Callinan'),
      new Surfer('Jeremy Flores'),
      new Surfer('Yago Dora'),
      new Surfer('Michael Rodrigues'),
      new Surfer('Sebastian Zietz'),
      new Surfer('Adrian Buchan'),
      new Surfer('Ezekiel Lau'),
      new Surfer('Peterson Crisanto'),
      new Surfer('Deivid Silva'),
      new Surfer('Griffin Colapinto'),
      new Surfer('Joan Duru'),
      new Surfer('Ricardo Christie'),
      new Surfer('Kelly Slater'),
      new Surfer('Jesse Mendes'),
      new Surfer('Soli Bailey'),
      new Surfer('Leonardi Fiorivanti'),
      new Surfer('Jadson Andre'),
      new Surfer('Jack Freestone'),
      new Surfer('Caio Ibelli'),
      new Surfer('Jacob Willcox'),
      new Surfer('Rio Waida'),
    ];
  }

  getMargiesSurfers(): Surfer[] {
    return [
      new Surfer('Filipe Toledo'),
      new Surfer('Gabriel Medina'),
      new Surfer('Italo Ferreira'),
      new Surfer('Julian Wilson'),
      new Surfer('Kanoa Igarashi'),
      new Surfer('John John Florence'),
      new Surfer('Jordy Smith'),
      new Surfer('Kolohe Andino'),
      new Surfer('Conner Coffin'),
      new Surfer('Wade Carmichael'),
      new Surfer('Jeremy Flores'),
      new Surfer('Owen Wright'),
      new Surfer('Michel Bourez'),
      new Surfer('Willian Cardoso'),
      new Surfer('Michael Rodrigues'),
      new Surfer('Ryan Callinan'),
      new Surfer('Seth Moniz'),
      new Surfer('Adrian Buchan'),
      new Surfer('Kelly Slater'),
      new Surfer('Yago Dora'),
      new Surfer('Peterson Crisanto'),
      new Surfer('Joan Duru'),
      new Surfer('Deivid Silva'),
      new Surfer('Sebastian Zietz'),
      new Surfer('Griffin Colapinto'),
      new Surfer('Jesse Mendes'),
      new Surfer('Ezekiel Lau'),
      new Surfer('Leonardi Fiorivanti'),
      new Surfer('Jack Freestone'),
      new Surfer('Ricardo Christie'),
      new Surfer('Jadson Andre'),
      new Surfer('Soli Bailey'),
      new Surfer('Caio Ibelli'),
      new Surfer('Frederico Morais'),
      new Surfer('Surfer 35#'),
      new Surfer('Surfer 36#'),
    ];
  }

  getGoldCoastSurfers(): Surfer[] {
    return [
      new Surfer('Gabriel Medina'),
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

    if (this.selectedEvent === surfEvents.Keramas) {
      this.setInitialValuesKeramas();
    }

    if (this.selectedEvent === surfEvents.Margies) {
      this.setInitialValuesMargies();
    }

    if (this.selectedEvent === surfEvents.User) {
      this.setInitialValuesOwn();
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

  public setInitialValuesKeramas() {
    this.surfers = this.getKeramasSurfers();
    this.SetRankings();
    this.GenerateSeeding();
    this.RerankHeatsKeramas();
    this.GenerateLosersRound();
    this.RerankLosersKeramas();
    this.GenerateR32();
  }

  public setInitialValuesMargies() {
    this.surfers = this.getMargiesSurfers();
    this.SetRankings();
    this.GenerateSeeding();
    this.GenerateLosersRound();
    this.GenerateR32();
  }

  public setInitialValuesOwn() {
    const stringResult = localStorage.getItem(this.surfArrayKey);
    if (stringResult !== null) {
      const jsonSurfers = JSON.parse(stringResult) as Surfer[];
      this.surfers = jsonSurfers.map(x => new Surfer(x.name, x.actualRank));
    } else {
      this.setInitialValuesMargies();
    }
    this.SetRankings();
    this.GenerateSeeding();
    this.RerankHeatsOwn();
    this.GenerateLosersRound();
    this.RerankHeatsOwnLoser();
    this.GenerateR32();
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
    if (this.surfers !== undefined) {
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
      this.GenerateSeeding();
      this.GenerateLosersRound();
      this.GenerateR32();
      let save = true;
      if (this.selectedEvent !== surfEvents.User) {
        save = confirm('Save change to users event?');
      }
      if (save) {
        localStorage.setItem(this.surfArrayKey, JSON.stringify(this.surfers));
        this.selectedEvent = surfEvents.User;
      }
    }
  }

  SetRankings() {
    for (let index = 0; index < this.surfers.length; index++) {
      const replacementSurfers = this.surfers.filter(x => (x.actualRank !== undefined) && (this.surfers.indexOf(x) < index)).length;
      const rank = index + 1 - replacementSurfers;
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

  RerankLosersKeramas() {
    let heat = this.losersRound.heats[1];
    heat.heatSurfers[0] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(2, heat);
    heat = this.losersRound.heats[2];
    heat.heatSurfers[0] = this.getSurferFromNumber(2, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(3, heat);
    heat = this.losersRound.heats[3];
    heat.heatSurfers[0] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(2, heat);
  }

  RerankHeatsGc() {
    this.seedingBracket.heats.forEach(heat => {
      switch (heat.heatnumber) {
        case 1:
          moveItemInArray(heat.heatSurfers, 0, 2);
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

  RerankHeatsKeramas() {
    let heat = this.seedingBracket.heats[1];
    heat.heatSurfers[0] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(2, heat);
    heat = this.seedingBracket.heats[2];
    heat.heatSurfers[0] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(2, heat);
    heat = this.seedingBracket.heats[3];
    heat.heatSurfers[0] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(2, heat);
    heat = this.seedingBracket.heats[5];
    heat.heatSurfers[0] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(2, heat);
    heat = this.seedingBracket.heats[6];
    heat.heatSurfers[0] = this.getSurferFromNumber(2, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(3, heat);
    heat = this.seedingBracket.heats[8];
    heat.heatSurfers[0] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(2, heat);
    heat = this.seedingBracket.heats[9];
    heat.heatSurfers[0] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(2, heat);
    heat = this.seedingBracket.heats[10];
    heat.heatSurfers[0] = this.getSurferFromNumber(2, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(1, heat);
    heat = this.seedingBracket.heats[11];
    heat.heatSurfers[0] = this.getSurferFromNumber(1, heat);
    heat.heatSurfers[1] = this.getSurferFromNumber(3, heat);
    heat.heatSurfers[2] = this.getSurferFromNumber(2, heat);
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

  RerankHeatsOwn() {
    this.seedingBracket.heats.forEach(heat => {
      const seedOrderString = localStorage.getItem('seedHeat' + heat.heatnumber);
      if (seedOrderString !== null) {
        const heatOrder = JSON.parse(seedOrderString);
        heat.heatSurfers[0] = this.getSurferFromNumber(heatOrder[0], heat);
        heat.heatSurfers[1] = this.getSurferFromNumber(heatOrder[1], heat);
        heat.heatSurfers[2] = this.getSurferFromNumber(heatOrder[2], heat);
        this.ReorderHeat(heat.heatSurfers);
      }
    });
  }

  RerankHeatsOwnLoser() {
    this.losersRound.heats.forEach(heat => {
      const heatOrderString = localStorage.getItem('loserHeat' + heat.heatnumber);
      if (heatOrderString !== null) {
        const heatOrder = JSON.parse(heatOrderString);
        heat.heatSurfers[0] = this.getSurferFromNumber(heatOrder[0], heat);
        heat.heatSurfers[1] = this.getSurferFromNumber(heatOrder[1], heat);
        heat.heatSurfers[2] = this.getSurferFromNumber(heatOrder[2], heat);
        this.ReorderHeat(heat.heatSurfers);
      }
    });
  }

  getSurferFromNumber(numberSurfer: number, heat: ThreeManHeat): HeatSurfer {
    switch (numberSurfer) {
      case 1:
        return heat.heatSurfer1;
      case 2:
        return heat.heatSurfer2;
      case 3:
        return heat.heatSurfer3;
    }
    throw new Error('Non existing surfer in heat');

  }

  onDropSeed(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      const arrayWithData = event.container.data;
      moveItemInArray(arrayWithData, event.previousIndex, event.currentIndex);

      let save = true;
      if (this.selectedEvent !== surfEvents.User) {
        save = confirm('Save change to users event?');
      }
      if (save) {

        for (let index = 0; index < this.seedingBracket.heats.length; index++) {
          const element = this.seedingBracket.heats[index];
          localStorage.setItem('seedHeat' + element.heatnumber, this.getStorageString(element));
        }
        this.selectedEvent = surfEvents.User;
      }

      this.ReorderHeat(arrayWithData as unknown as HeatSurfer[]);
      this.GenerateLosersRound();
      this.GenerateR32();
    }
  }
  getStorageString(element: ThreeManHeat): string {
    const arrayToSave = [
      this.getNumberFromArray(element.heatSurfers[0], element),
      this.getNumberFromArray(element.heatSurfers[1], element),
      this.getNumberFromArray(element.heatSurfers[2], element)];
    return JSON.stringify(arrayToSave);
  }
  getNumberFromArray(surfer: HeatSurfer, heatSurfers: ThreeManHeat) {
    if (heatSurfers.heatSurfer1 === surfer) {
      return 1;
    }
    if (heatSurfers.heatSurfer2 === surfer) {
      return 2;
    }
    return 3;
  }

  onDropLosers(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      const arrayWithData = event.container.data;
      moveItemInArray(arrayWithData, event.previousIndex, event.currentIndex);

      let save = true;
      if (this.selectedEvent !== surfEvents.User) {
        save = confirm('Save change to users event?');
      }
      if (save) {

        for (let index = 0; index < this.seedingBracket.heats.length; index++) {
          const element = this.seedingBracket.heats[index];
          localStorage.setItem('loserHeat' + element.heatnumber, this.getStorageString(element));
        }

        this.selectedEvent = surfEvents.User;
      }
      this.ReorderHeat(arrayWithData as unknown as HeatSurfer[]);
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

  public ResetRanking(surfer: Surfer) {
    surfer.actualRank = undefined;
  }
}
