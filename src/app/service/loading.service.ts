import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { concatMap, finalize, tap } from 'rxjs/operators';

@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$: Observable<boolean> = this.loadingSubject.asObservable();

  isCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null).pipe(
      tap(() => this.isOn()),
      concatMap(() => obs$),
      finalize(() => {
        this.isOff();
      })
    );
  }

  isOn() {
    this.loadingSubject.next(true);
  }

  isOff() {
    this.loadingSubject.next(false);
  }
}
