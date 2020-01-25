import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWallComponent } from './news-wall.component';

describe('NewsWallComponent', () => {
  let component: NewsWallComponent;
  let fixture: ComponentFixture<NewsWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
