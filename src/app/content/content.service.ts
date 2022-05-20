import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<IWordCount[]> {
    return this.http.get(url).pipe(
      map((res: { description: string }) => {
        return this.wordcount(res.description);
      })
    );
  }

  wordcount(text: string): IWordCount[] {
    let _text = text
      .split(' ')
      .reduce((cnt, cur) => ((cnt[cur] = cnt[cur] + 1 || 1), cnt), []);

    return Object.entries(_text)
      .map(([key, value]) => {
        let word: IWordCount = {
          word: key,
          count: value,
        };
        return word;
      })
      .sort((a, b) => {
        return b.count - a.count;
      })
      .splice(0, 10);
  }
}

export interface IWordCount {
  word: string;
  count: number;
}
