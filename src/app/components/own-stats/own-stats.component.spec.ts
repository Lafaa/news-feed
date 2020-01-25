import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnStatsComponent } from './own-stats.component';

describe('OwnStatsComponent', () => {
  let component: OwnStatsComponent;
  let fixture: ComponentFixture<OwnStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
