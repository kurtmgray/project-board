import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ErrorData } from './error-data.service';
@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private errorSubject: BehaviorSubject<ErrorData | undefined> =
    new BehaviorSubject<ErrorData | undefined>(undefined);
  setError(error: ErrorData) {
    this.errorSubject.next(error);
  }
  getError(): Observable<ErrorData | undefined> {
    return this.errorSubject.asObservable();
  }

  
}