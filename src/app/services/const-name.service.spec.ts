import { TestBed } from '@angular/core/testing';

import { ConstNameService } from './const-name.service';

describe('ConstNameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConstNameService = TestBed.get(ConstNameService);
    expect(service).toBeTruthy();
  });
});
