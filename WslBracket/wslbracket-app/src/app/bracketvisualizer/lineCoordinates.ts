export class lineCoordinates {
  lineCoords: coords[];
  
  constructor(coords: coords[]) {
    this.lineCoords = coords;
  }
}

export class coords{
    x: number;
    y: number;
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
}
