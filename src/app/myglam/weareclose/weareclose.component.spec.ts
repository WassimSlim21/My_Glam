import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WearecloseComponent } from './weareclose.component';

describe('WearecloseComponent', () => {
  let component: WearecloseComponent;
  let fixture: ComponentFixture<WearecloseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WearecloseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WearecloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
