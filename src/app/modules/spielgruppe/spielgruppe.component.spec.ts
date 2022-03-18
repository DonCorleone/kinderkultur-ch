import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielgruppeComponent } from './spielgruppe.component';

describe('SpielgruppeComponent', () => {
  let component: SpielgruppeComponent;
  let fixture: ComponentFixture<SpielgruppeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielgruppeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielgruppeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
