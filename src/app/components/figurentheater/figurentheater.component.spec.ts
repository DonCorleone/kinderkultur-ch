import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigurentheaterComponent } from './figurentheater.component';

describe('FigurentheaterComponent', () => {
  let component: FigurentheaterComponent;
  let fixture: ComponentFixture<FigurentheaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FigurentheaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FigurentheaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
