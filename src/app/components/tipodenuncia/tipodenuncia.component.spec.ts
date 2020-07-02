import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipodenunciaComponent } from './tipodenuncia.component';

describe('TipodenunciaComponent', () => {
  let component: TipodenunciaComponent;
  let fixture: ComponentFixture<TipodenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipodenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipodenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
