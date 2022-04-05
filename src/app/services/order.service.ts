import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IOrder  } from './../Shared Classes/IOrder'
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class orderService {
  constructor(private http: HttpClient) {}
  Url:string='http://localhost:18352/api/Orders';
  GetAllOrders(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.Url).pipe(catchError((err)=>{
      return throwError(err.message ||"Server Error");
    }))
  }

  DeleteOrder(ProductId:number){
    return this.http.delete(this.Url+"/"+ProductId+"").pipe(catchError((err)=>{
      return throwError(err.message ||"Not allowed");
    }))
  }

 /*  Addfavourite(ProductId:number){
    return this.http.post(this.Url+"?ProductID="+ProductId+"",this.Options2).pipe(catchError((err)=>{
      return throwError(err.message ||"Not allowed");
    }))
  } */

}