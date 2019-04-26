export class Surfer {
  name: string;
  rank: number;
  tier: number;
  constructor(name: string, rank: number, tier: number) {
    this.name = name;
    this.rank = rank;
    this.tier = tier;
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
  surfers: HeatSurfer[];
  constructor(heatnumber: number, surfer1: Surfer, surfer2: Surfer, surfer3: Surfer) {
    this.heatnumber = heatnumber;
    this.surfers = [new HeatSurfer(1, surfer1), new HeatSurfer(2, surfer2), new HeatSurfer(3, surfer3)];
  }
}

export class SeedingBracket {
  heat5: ThreeManHeat;
  heat6: ThreeManHeat;
  heats: ThreeManHeat[];
  constructor(surfers: Surfer[]) {
    this.heat6 = new ThreeManHeat(6, surfers[0], surfers[4], surfers[5]);
    this.heat5 = new ThreeManHeat(1, surfers[5], surfers[6], surfers[7]);
    this.heats = [this.heat5, this.heat6];
  }
}
