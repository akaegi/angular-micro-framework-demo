import { TestBed } from '@angular/core/testing';

import { Microplugin2Service } from './microplugin2.service';

describe('Microplugin2Service', () => {
  let service: Microplugin2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Microplugin2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
