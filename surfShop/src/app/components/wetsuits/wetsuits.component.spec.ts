import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetsuitsComponent } from './wetsuits.component';

describe('WetsuitsComponent', () => {
  let component: WetsuitsComponent;
  let fixture: ComponentFixture<WetsuitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetsuitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetsuitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
