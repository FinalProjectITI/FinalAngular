import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../Shared Classes/IProduct';

@Injectable({
  providedIn: 'root'
})
export class OneProductService {

  constructor(private http: HttpClient) { }
  GetAllProducts(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(
      'http://localhost:18352/api/Products/' + productId 
    ).pipe(catchError((err)=>{
      return throwError(()=>err.msg||"server Error")
    }));
  }
}
