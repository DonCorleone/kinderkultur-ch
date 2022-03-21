import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielgruppeAgbComponent } from './spielgruppe-agb.component';

describe('SpielgruppeAgbComponent', () => {
  let component: SpielgruppeAgbComponent;
  let fixture: ComponentFixture<SpielgruppeAgbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielgruppeAgbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielgruppeAgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
