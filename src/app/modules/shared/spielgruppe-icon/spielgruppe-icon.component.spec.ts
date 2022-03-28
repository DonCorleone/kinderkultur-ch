import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielgruppeIconComponent } from './spielgruppe-icon.component';

describe('SpielgruppeIconComponent', () => {
  let component: SpielgruppeIconComponent;
  let fixture: ComponentFixture<SpielgruppeIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielgruppeIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielgruppeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
