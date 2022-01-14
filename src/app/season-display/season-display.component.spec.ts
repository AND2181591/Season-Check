import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonDisplayComponent } from './season-display.component';

describe('SeasonDisplayComponent', () => {
  let component: SeasonDisplayComponent;
  let fixture: ComponentFixture<SeasonDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
