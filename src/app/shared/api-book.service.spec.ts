import { TestBed } from '@angular/core/testing';

import { ApiBookService } from './api-book.service';

describe('ApiBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiBookService = TestBed.get(ApiBookService);
    expect(service).toBeTruthy();
  });
});
