export class LineCoordinates {
  lineCoords: Coords[];
  selected = false;
  constructor(coords: Coords[], selected: boolean) {
    this.lineCoords = coords;
    this.selected = selected;
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
