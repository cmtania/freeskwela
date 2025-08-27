import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, concatMap, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DataService {

  private baseUrl = 'https://freeskwela.free.beeceptor.com';
  constructor(private readonly _httpClient: HttpClient) {}

  getTrainings() {
    return this.httpGet(`${this.baseUrl}/trainings`).pipe(
      concatMap((respObj: any) => {
        console.log('respObj', respObj);
        if (!respObj) {
         return of([])
        }

        return of(respObj);
      }),
      catchError((respError: any) => {
        console.error(respError);
        return of([]);
      })
    );
  }

  private httpGet(url: string, body: any = null): Observable<any> {
    return this._httpClient.get(url);
  }
}