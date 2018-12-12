import { TestBed } from '@angular/core/testing';

import { ProductsRestService } from './products-rest.service';

describe('ProductsRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsRestService = TestBed.get(ProductsRestService);
    expect(service).toBeTruthy();
  });
});
