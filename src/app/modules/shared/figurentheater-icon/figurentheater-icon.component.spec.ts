import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurentheaterIconComponent } from './figurentheater-icon.component';

describe('FigurentheaterIconComponent', () => {
  let component: FigurentheaterIconComponent;
  let fixture: ComponentFixture<FigurentheaterIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigurentheaterIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurentheaterIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
