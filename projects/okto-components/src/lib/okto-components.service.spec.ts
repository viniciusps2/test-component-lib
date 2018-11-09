import { TestBed } from '@angular/core/testing';

import { OktoComponentsService } from './okto-components.service';

describe('OktoComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OktoComponentsService = TestBed.get(OktoComponentsService);
    expect(service).toBeTruthy();
  });
});
