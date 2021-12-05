import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolLocationsComponent } from './cool-locations.component';

describe('CoolLocationsComponent', () => {
  let component: CoolLocationsComponent;
  let fixture: ComponentFixture<CoolLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolLocationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
