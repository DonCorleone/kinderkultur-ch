import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchlosswochenIconComponent } from './schlosswochen-icon.component';

describe('SchlosswochenIconComponent', () => {
  let component: SchlosswochenIconComponent;
  let fixture: ComponentFixture<SchlosswochenIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchlosswochenIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchlosswochenIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
