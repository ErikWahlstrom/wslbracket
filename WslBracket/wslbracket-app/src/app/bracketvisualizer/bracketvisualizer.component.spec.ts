import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BracketvisualizerComponent } from './bracketvisualizer.component';

describe('BracketvisualizerComponent', () => {
  let component: BracketvisualizerComponent;
  let fixture: ComponentFixture<BracketvisualizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BracketvisualizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BracketvisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
