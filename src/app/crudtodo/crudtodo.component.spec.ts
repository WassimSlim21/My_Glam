import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudtodoComponent } from './crudtodo.component';

describe('CrudtodoComponent', () => {
  let component: CrudtodoComponent;
  let fixture: ComponentFixture<CrudtodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudtodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudtodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
