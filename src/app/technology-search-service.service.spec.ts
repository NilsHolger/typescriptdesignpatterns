/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TechnologySearchServiceService } from './technology-search-service.service';

describe('Service: TechnologySearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnologySearchServiceService]
    });
  });

  it('should ...', inject([TechnologySearchServiceService], (service: TechnologySearchServiceService) => {
    expect(service).toBeTruthy();
  }));
});
