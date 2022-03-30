import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../Shared Classes/IProduct';

@Injectable({
  providedIn: 'root',
})
export class AllProductsService {
  constructor(private http: HttpClient) {}
  GetAllProducts(start: number, categoryid: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      'http://localhost:18352/api/Products/GetProducts/' + start + '/' + categoryid
    ).pipe(catchError((err)=>{
      return throwError(()=>err.msg||"server Error")
    }));
  }
}
