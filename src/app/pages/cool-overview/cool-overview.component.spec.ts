import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolOverviewComponent } from './cool-overview.component';

describe('CoolOverviewComponent', () => {
  let component: CoolOverviewComponent;
  let fixture: ComponentFixture<CoolOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
