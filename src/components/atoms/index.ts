import { Component, Input } from '@angular/core';
import { FeedFetcherService } from '../../service/feed-fetcher';
import { FeedSourceService } from '../../service/feed-source';

@Component({
  selector: 'atoms',
  templateUrl: './index.html',
  providers: [FeedFetcherService, FeedSourceService]
})

export class AtomsComponent {

  constructor(private feedFetcherService: FeedFetcherService) {


  }
}
