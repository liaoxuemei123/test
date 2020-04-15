import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldingComponent } from './welding.component';

describe('WeldingComponent', () => {
  let component: WeldingComponent;
  let fixture: ComponentFixture<WeldingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeldingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeldingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
