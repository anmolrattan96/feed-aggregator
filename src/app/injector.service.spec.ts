import { TestBed, inject } from '@angular/core/testing';

import { InjectorService } from './injector.service';

describe('InjectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InjectorService]
    });
  });

  it('should be created', inject([InjectorService], (service: InjectorService) => {
    expect(service).toBeTruthy();
  }));
});
