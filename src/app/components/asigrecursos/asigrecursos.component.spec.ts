import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsigrecursosComponent } from './asigrecursos.component';

describe('AsigrecursosComponent', () => {
  let component: AsigrecursosComponent;
  let fixture: ComponentFixture<AsigrecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsigrecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsigrecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
