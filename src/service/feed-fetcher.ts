import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { Http, Response } from '@angular/http';

import { FeedSourceService } from './feed-source';
import { WebSql}

var parseString = require('xml2js').parseString;
var parse = require('xml-parser');

@Injectable()
export class FeedFetcherService {

  constructor(private feedSourceService: FeedSourceService, private http: Http) {
    this.fetchFeed();
  }

  fetchFeed() {
    const sources = this.feedSourceService.getFeedSource();
    const fetch = Rx.Observable.of(...sources).map((source) => {
      return this.http.get(source).map(x => x.text()).subscribe((x) => {
        return x;
      });
    }).delay(3000).repeat();

    fetch.subscribe();
  }
}
