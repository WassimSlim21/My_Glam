import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowitworkComponent } from './howitwork.component';

describe('HowitworkComponent', () => {
  let component: HowitworkComponent;
  let fixture: ComponentFixture<HowitworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowitworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowitworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
