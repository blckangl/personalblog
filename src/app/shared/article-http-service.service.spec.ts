import { TestBed } from '@angular/core/testing';

import { ArticleHttpServiceService } from './article-http-service.service';

describe('ArticleHttpServiceService', () => {
  let service: ArticleHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
