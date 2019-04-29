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
