import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyglamComponent } from './myglam.component';

describe('MyglamComponent', () => {
  let component: MyglamComponent;
  let fixture: ComponentFixture<MyglamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyglamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyglamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
