export class Surfer {
  name: string;
  rank: number;
  tier: number;
  constructor(name: string) {
    this.name = name;
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
  constructor(heatnumber: number, surfer1: Surfer, surfer2: Surfer, surfer3: Surfer) {
    this.heatnumber = heatnumber;
    this.heatSurfers = [new HeatSurfer(1, surfer1), new HeatSurfer(2, surfer2), new HeatSurfer(3, surfer3)];
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
      new ThreeManHeat(12, surfers[11], surfers[12], surfers[24])];
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
      new ThreeManHeat(4, orderedArray[3], orderedArray[4], orderedArray[8]), ];
  }

  getSurfersFromSeeding(surfers: SeedingBracket) {
    const unorderedSurfers = surfers.heats.map(x => x.heatSurfers[2].surfer);
    const ordered = unorderedSurfers.sort((x, y) => x.rank - y.rank);
    return ordered;
  }
}

export class RoundOf32 {
  heats: TwoManHeat[];
  orderedSurfers: Surfer[];
  constructor(seededSurfers: SeedingBracket, surfersFromLosers: LosersBracket) {
    const orderedArray = this.getSurfersToRoundOf32(seededSurfers, surfersFromLosers);
    this.orderedSurfers = orderedArray;
    this.heats = [
      new TwoManHeat(1, orderedArray[2], orderedArray[29]),
      // new TwoManHeat(2, orderedArray[7], orderedArray[7]),
      // new TwoManHeat(3, orderedArray[7], orderedArray[7]),
      // new TwoManHeat(4, orderedArray[7], orderedArray[7]),

      new TwoManHeat(5, orderedArray[1], orderedArray[30]),
      // new TwoManHeat(6, orderedArray[7], orderedArray[7]),
      // new TwoManHeat(7, orderedArray[7], orderedArray[7]),
      // new TwoManHeat(8, orderedArray[7], orderedArray[7]),

      new TwoManHeat(9, orderedArray[0], orderedArray[31]),
      // new TwoManHeat(10, orderedArray[7], orderedArray[7]),
      // new TwoManHeat(11, orderedArray[7], orderedArray[7]),
      // new TwoManHeat(12, orderedArray[7], orderedArray[7]),

      new TwoManHeat(13, orderedArray[3], orderedArray[28]),
      // new TwoManHeat(14, orderedArray[7], orderedArray[7]),
      // new TwoManHeat(15, orderedArray[7], orderedArray[7]),
      // new TwoManHeat(16, orderedArray[7], orderedArray[7])
    ];
  }

  getSurfersToRoundOf32(seededSurfers: SeedingBracket, surfersFromLosers: LosersBracket) {
    const losersWinners = surfersFromLosers.heats.map(x => [x.heatSurfers[0], x.heatSurfers[1]]).reduce((a, b) => a.concat(b));
    const seededWinners = seededSurfers.heats.map(x => [x.heatSurfers[0], x.heatSurfers[1]]).reduce((a, b) => a.concat(b));

    const orderedWinners = this.orderSurfersFromHeat(seededWinners);
    const orderedLosers = losersWinners.sort((x, y) => y.surfer.rank - x.surfer.rank);

    orderedLosers.forEach(loser => {
      const tier = loser.surfer.tier;
      const lastWithSameTier = orderedWinners.filter(x => x.surfer.tier === tier).sort((x, y) => {
        if (x.heatRank === 1 || y.heatRank === 1 && x.heatRank !== y.heatRank) {
          return x.heatRank - y.heatRank;
        }
        return x.surfer.rank - y.surfer.rank;
      })[0];
      const indexOfLast = orderedWinners.indexOf(lastWithSameTier);
      orderedWinners.splice(indexOfLast + 1, 0, loser);
    });
    return orderedWinners.map(x => x.surfer);
  }

  orderSurfersFromHeat(seededWinners: HeatSurfer[]) {
    seededWinners.sort((x, y) => {
      if (x.surfer.tier !== y.surfer.tier) {
        return x.surfer.tier - y.surfer.tier;
      }

      if (x.heatRank === 1 || y.heatRank === 1 && x.heatRank !== y.heatRank) {
        return x.heatRank - y.heatRank;
      }
      return x.surfer.rank - y.surfer.rank;
    });
    return seededWinners;
  }
}

