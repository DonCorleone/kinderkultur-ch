import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchlosswochenComponent } from './schlosswochen.component';

describe('SchlosswochenComponent', () => {
  let component: SchlosswochenComponent;
  let fixture: ComponentFixture<SchlosswochenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchlosswochenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchlosswochenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
