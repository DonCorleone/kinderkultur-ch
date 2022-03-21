import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpielgruppeOverviewComponent } from './spielgruppe-overview.component';

describe('SpielgruppeOverviewComponent', () => {
  let component: SpielgruppeOverviewComponent;
  let fixture: ComponentFixture<SpielgruppeOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpielgruppeOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpielgruppeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
