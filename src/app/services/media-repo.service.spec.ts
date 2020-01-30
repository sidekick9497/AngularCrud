import { TestBed } from '@angular/core/testing';

import { MediaRepoService } from './media-repo.service';

describe('MediaRepoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaRepoService = TestBed.get(MediaRepoService);
    expect(service).toBeTruthy();
  });
});
