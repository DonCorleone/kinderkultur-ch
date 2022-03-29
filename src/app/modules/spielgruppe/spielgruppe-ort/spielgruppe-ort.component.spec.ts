import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielgruppeOrtComponent } from './spielgruppe-ort.component';

describe('SpielgruppeOrtComponent', () => {
  let component: SpielgruppeOrtComponent;
  let fixture: ComponentFixture<SpielgruppeOrtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielgruppeOrtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielgruppeOrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
