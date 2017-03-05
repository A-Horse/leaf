import { Injectable } from '@angular/core';

@Injectable()
export class FeedSourceService {
  constructor() {
    console.log('feed source');
  }

  getFeedSource(): Array<string> {
    return [
      'http://www.infoq.com/cn/feed',
      'https://www.v2ex.com/feed/tab/tech.xml'
    ]
  }
}
