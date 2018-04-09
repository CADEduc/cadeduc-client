import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapaEnsinoComponent } from './etapa-ensino.component';

describe('EtapaEnsinoComponent', () => {
  let component: EtapaEnsinoComponent;
  let fixture: ComponentFixture<EtapaEnsinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtapaEnsinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtapaEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
