import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Microplugin2Component } from './microplugin2.component';

describe('Microplugin2Component', () => {
  let component: Microplugin2Component;
  let fixture: ComponentFixture<Microplugin2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Microplugin2Component]
    });
    fixture = TestBed.createComponent(Microplugin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
