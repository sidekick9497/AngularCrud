import { TestBed } from '@angular/core/testing';

import { MediaHttpClientService } from './media-http-client.service';

describe('MediaHttpClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediaHttpClientService = TestBed.get(MediaHttpClientService);
    expect(service).toBeTruthy();
  });
});
