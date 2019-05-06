export class LineCoordinates {
  lineCoords: Coords[];

  constructor(coords: Coords[]) {
    this.lineCoords = coords;
  }
}

export class Coords {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
