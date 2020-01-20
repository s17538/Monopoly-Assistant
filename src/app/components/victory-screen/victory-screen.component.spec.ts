import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VictoryScreenComponent } from './victory-screen.component';

describe('VictoryScreenComponent', () => {
  let component: VictoryScreenComponent;
  let fixture: ComponentFixture<VictoryScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VictoryScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VictoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
