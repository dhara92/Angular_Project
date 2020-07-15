import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feedback } from '../shared/feedback';
import { baseURL } from '../shared/baseurl';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import * as console from 'console';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(public http: HttpClient,
    public processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Feedback>(baseURL + 'feedback',
      feedback, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError))
      ;
  }
}
