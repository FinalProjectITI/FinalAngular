import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IOrder  } from './../Shared Classes/IOrder'
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class orderService {
  constructor(private http: HttpClient) {}
  Url:string='http://localhost:18352/api/Orders';

  Header(access:string) {
    let header = new HttpHeaders().set("Authorization", "Bearer "+ access);
    const options = {
      headers: header,
    };
    return options;
  }

  GetAllOrders(access:string): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(this.Url,this.Header(access)).pipe(catchError((err)=>{
      return throwError(err.message ||"Server Error");
    }))
  }

  DeleteOrder(ProductId:number,access:string){
    return this.http.delete(this.Url+"/"+ProductId+"",this.Header(access)).pipe(catchError((err)=>{
      return throwError(err.message ||"Not allowed");
    }))
  }

 /*  Addfavourite(ProductId:number){
    return this.http.post(this.Url+"?ProductID="+ProductId+"",this.Options2).pipe(catchError((err)=>{
      return throwError(err.message ||"Not allowed");
    }))
  } */

}