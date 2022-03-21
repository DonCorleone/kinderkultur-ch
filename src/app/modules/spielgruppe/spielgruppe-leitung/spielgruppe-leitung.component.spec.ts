import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielgruppeLeitungComponent } from './spielgruppe-leitung.component';

describe('SpielgruppeLeitungComponent', () => {
  let component: SpielgruppeLeitungComponent;
  let fixture: ComponentFixture<SpielgruppeLeitungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielgruppeLeitungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielgruppeLeitungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
