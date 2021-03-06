export class Surfer {
  name: string;
  private _tier = 0;
  get tier(): number {
    return this._tier;
  }
  set tier(tier: number) {
    this._tier = tier;
    if (this.actualRank === undefined) {
      this.actualTier = tier;
    }
  }

  private _actualRank?: number;
  get actualRank(): number | undefined {
    return this._actualRank;
  }
  set actualRank(actualRank: number | undefined) {
    this._actualRank = actualRank;
    if (actualRank !== undefined) {
      this.actualTier = 4;
    }
  }

  rank = 0;
  actualTier = 0;
  roundOneResult?: number;
  constructor(name: string, actualRank?: number) {
    this.name = name;
    this.actualRank = actualRank;
    if (actualRank !== undefined) {
      this.actualTier = 4;
    }
  }

  public getActualTier(): number {
    return this.actualRank !== undefined ? this.actualTier : this.tier;
  }

  public getActualRank(): number {
    return this.actualRank !== undefined ? this.actualRank : this.rank;
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

export class ThreeManHeat {
  heatnumber: number;
  heatSurfers: HeatSurfer[];
  heatSurfer1: HeatSurfer;
  heatSurfer2: HeatSurfer;
  heatSurfer3: HeatSurfer;
  constructor(
    heatnumber: number,
    surfer1: Surfer,
    surfer2: Surfer,
    surfer3: Surfer
  ) {
    this.heatnumber = heatnumber;
    this.heatSurfers = [
      new HeatSurfer(1, surfer1),
      new HeatSurfer(2, surfer2),
      new HeatSurfer(3, surfer3)
    ];
    this.heatSurfer1 = this.heatSurfers[0];
    this.heatSurfer2 = this.heatSurfers[1];
    this.heatSurfer3 = this.heatSurfers[2];
  }
}

export class TwoManHeat {
  heatnumber: number;
  heatSurfers: HeatSurfer[];
  constructor(heatnumber: number, surfer1: Surfer, surfer2: Surfer) {
    this.heatnumber = heatnumber;
    this.heatSurfers = [new HeatSurfer(1, surfer1), new HeatSurfer(2, surfer2)];
  }
}

export class SeedingBracket {
  heats: ThreeManHeat[];
  constructor(surfers: Surfer[]) {
    this.heats = [
      new ThreeManHeat(1, surfers[5], surfers[18], surfers[30]),
      new ThreeManHeat(2, surfers[4], surfers[19], surfers[31]),
      new ThreeManHeat(3, surfers[3], surfers[20], surfers[32]),
      new ThreeManHeat(4, surfers[2], surfers[21], surfers[33]),
      new ThreeManHeat(5, surfers[1], surfers[22], surfers[34]),
      new ThreeManHeat(6, surfers[0], surfers[23], surfers[35]),
      new ThreeManHeat(7, surfers[6], surfers[17], surfers[29]),
      new ThreeManHeat(8, surfers[7], surfers[16], surfers[28]),
      new ThreeManHeat(9, surfers[8], surfers[15], surfers[27]),
      new ThreeManHeat(10, surfers[9], surfers[14], surfers[26]),
      new ThreeManHeat(11, surfers[10], surfers[13], surfers[25]),
      new ThreeManHeat(12, surfers[11], surfers[12], surfers[24])
    ];
  }
}

export class LosersBracket {
  heats: ThreeManHeat[];
  constructor(surfers: SeedingBracket) {
    const orderedArray = this.getSurfersFromSeeding(surfers);
    this.heats = [
      new ThreeManHeat(1, orderedArray[0], orderedArray[7], orderedArray[11]),
      new ThreeManHeat(2, orderedArray[1], orderedArray[6], orderedArray[10]),
      new ThreeManHeat(3, orderedArray[2], orderedArray[5], orderedArray[9]),
      new ThreeManHeat(4, orderedArray[3], orderedArray[4], orderedArray[8])
    ];
  }

  getSurfersFromSeeding(surfers: SeedingBracket) {
    const unorderedSurfers = surfers.heats.map(x => x.heatSurfers[2].surfer);
    const ordered = unorderedSurfers.sort((x, y) => {
      return x.getActualRank() - y.getActualRank();
    });
    return ordered;
  }
}

export class RoundOf32 {
  heats: TwoManHeat[];
  orderedSurfers: Surfer[];
  constructor(seededSurfers: SeedingBracket, surfersFromLosers: LosersBracket) {
    seededSurfers.heats.forEach(element => {
      element.heatSurfers[0].surfer.roundOneResult = 1;
      element.heatSurfers[1].surfer.roundOneResult = 2;
      element.heatSurfers[2].surfer.roundOneResult = 3;
    });

    const qualifiedSurfers = surfersFromLosers.heats
      .concat(seededSurfers.heats)
      .map(x => [x.heatSurfers[0].surfer, x.heatSurfers[1].surfer])
      .reduce((a, b) => a.concat(b));

    qualifiedSurfers.sort((x, y) => {
      if (x.getActualTier() !== y.getActualTier()) {
        return x.getActualTier() - y.getActualTier();
      }

      if (x.roundOneResult === 1 && y.roundOneResult !== 1) {
        return -1;
      }
      if (y.roundOneResult === 1 && x.roundOneResult !== 1) {
        return 1;
      }

      return x.getActualRank() - y.getActualRank();
    });

    this.orderedSurfers = qualifiedSurfers;
    this.heats = [
      new TwoManHeat(1, qualifiedSurfers[2], qualifiedSurfers[29]),
      new TwoManHeat(2, qualifiedSurfers[13], qualifiedSurfers[31 - 13]),
      new TwoManHeat(3, qualifiedSurfers[5], qualifiedSurfers[31 - 5]),
      new TwoManHeat(4, qualifiedSurfers[10], qualifiedSurfers[31 - 10]),
      new TwoManHeat(5, qualifiedSurfers[1], qualifiedSurfers[30]),
      new TwoManHeat(6, qualifiedSurfers[14], qualifiedSurfers[31 - 14]),
      new TwoManHeat(7, qualifiedSurfers[6], qualifiedSurfers[31 - 6]),
      new TwoManHeat(8, qualifiedSurfers[9], qualifiedSurfers[31 - 9]),
      new TwoManHeat(9, qualifiedSurfers[0], qualifiedSurfers[31]),
      new TwoManHeat(10, qualifiedSurfers[15], qualifiedSurfers[31 - 15]),
      new TwoManHeat(11, qualifiedSurfers[8], qualifiedSurfers[31 - 8]),
      new TwoManHeat(12, qualifiedSurfers[7], qualifiedSurfers[31 - 7]),
      new TwoManHeat(13, qualifiedSurfers[3], qualifiedSurfers[28]),
      new TwoManHeat(14, qualifiedSurfers[12], qualifiedSurfers[31 - 12]),
      new TwoManHeat(15, qualifiedSurfers[11], qualifiedSurfers[31 - 11]),
      new TwoManHeat(16, qualifiedSurfers[4], qualifiedSurfers[31 - 4])
    ];
  }

  orderSurfersFromHeat(seededWinners: HeatSurfer[]) {
    seededWinners.sort((x, y) => {
      if (x.surfer.getActualTier() !== y.surfer.getActualTier()) {
        return x.surfer.getActualTier() - y.surfer.getActualTier();
      }

      if ((x.heatRank === 1 || y.heatRank === 1) && x.heatRank !== y.heatRank) {
        return x.heatRank - y.heatRank;
      }
      return x.surfer.getActualRank() - y.surfer.getActualRank();
    });
    return seededWinners;
  }
}

export enum surfEvents {
  GoldCoast,
  BellsBeach,
  Keramas,
  User,
  None,
  Margies,
  Rio,
  SurfRange,
  France
}
