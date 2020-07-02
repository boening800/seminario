import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrecursosComponent } from './grecursos.component';

describe('GrecursosComponent', () => {
  let component: GrecursosComponent;
  let fixture: ComponentFixture<GrecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
