import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { Http, Response }          from '@angular/http';

import { FeedSourceService } from './feed-source';

var parseString = require('xml2js').parseString;
var parse = require('xml-parser');

@Injectable()
export class FeedFetcherService {

  constructor(private feedSourceService: FeedSourceService, private http: Http) {
    console.log('feed fetcher');

    this.fetchFeed();
  }

  fetchFeed() {
    const self = this;
    const sources = this.feedSourceService.getFeedSource();
    Rx.Observable
      .interval(3000)
      .timeInterval()
      .of(...sources)
      .map((source) => {
        return self.http.get(source).map(x => {
          return x.text();
          /* parseString(x.text(), (error, result) => {
           *   console.log(result);
           * })*/
        }).subscribe((x) => {

        });
      })
      .subscribe();

  }


}
