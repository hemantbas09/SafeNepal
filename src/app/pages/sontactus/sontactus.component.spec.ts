import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SontactusComponent } from './sontactus.component';

describe('SontactusComponent', () => {
  let component: SontactusComponent;
  let fixture: ComponentFixture<SontactusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SontactusComponent]
    });
    fixture = TestBed.createComponent(SontactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
