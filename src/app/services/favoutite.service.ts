import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../Shared Classes/IProduct';

@Injectable({
  providedIn: 'root',
})
export class favouriteService {
  constructor(private http: HttpClient) {}
  Url:string='http://localhost:18352/api/Favourits';
  Options2 = {
    headers: new HttpHeaders({  "accept": "/" ,
    'Content-Type':'application/json' })}


  GetAllFavourites(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.Url).pipe(catchError((err)=>{
      return throwError(err.message ||"Server Error");
    }))
  }

  DeleteFavourite(ProductId:number){
    return this.http.delete(this.Url+"/"+ProductId+"").pipe(catchError((err)=>{
      return throwError(err.message ||"Not allowed");
    }))
  }

  Addfavourite(ProductId:number){
    return this.http.post(this.Url+"?ProductID="+ProductId+"",this.Options2).pipe(catchError((err)=>{
      return throwError(err.message ||"Not allowed");
    }))
  }
}
