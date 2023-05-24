import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsteirasComponent } from './esteiras.component';

describe('EsteirasComponent', () => {
  let component: EsteirasComponent;
  let fixture: ComponentFixture<EsteirasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsteirasComponent]
    });
    fixture = TestBed.createComponent(EsteirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
