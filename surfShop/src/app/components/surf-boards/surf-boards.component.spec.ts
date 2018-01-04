import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurfBoardsComponent } from './surf-boards.component';

describe('SurfBoardsComponent', () => {
  let component: SurfBoardsComponent;
  let fixture: ComponentFixture<SurfBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurfBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurfBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
