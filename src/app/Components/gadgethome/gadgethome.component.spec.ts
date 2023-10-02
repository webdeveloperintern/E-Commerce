import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgethomeComponent } from './gadgethome.component';

describe('GadgethomeComponent', () => {
  let component: GadgethomeComponent;
  let fixture: ComponentFixture<GadgethomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GadgethomeComponent]
    });
    fixture = TestBed.createComponent(GadgethomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
