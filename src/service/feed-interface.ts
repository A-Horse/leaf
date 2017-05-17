import * as Rx from 'rxjs';
import 'rxjs/add/operator/map'
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FeedInterfaceService {
  defaultRemote = 'http://localhost:7788'
  listeners = [];

  constructor(private http: Http) {

  }

  addListener(fn) {
    this.listeners.push(fn);
  }

  startPolling() {

  }

  getUnreading(number: number) {
    return this.requestRemote('new-unread', number);
  }

  requestRemote(category, number) {
    return this.http.get(`${this.defaultRemote}/${category}/${number}`)
          .map(res => res.json().result);


  }
}
