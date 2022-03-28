import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielgruppeInfoComponent } from './spielgruppe-info.component';

describe('SpielgruppeInfoComponent', () => {
  let component: SpielgruppeInfoComponent;
  let fixture: ComponentFixture<SpielgruppeInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielgruppeInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielgruppeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
