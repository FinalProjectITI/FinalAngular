import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IProduct } from '../Shared Classes/IProduct';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  GetSearchResult(searchKey:string,start:number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      'http://localhost:18352/api/Products/search/'+searchKey+'/'+start
    ).pipe(catchError((err)=>{
      return throwError(()=>err.msg||"server Error")
    }));
  }
}
