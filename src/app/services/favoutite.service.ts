import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IProduct } from '../Shared Classes/IProduct';

/* const httpOptions = {
  headers: new HttpHeaders({  "accept": "" ,'Content-Type': 'application/json' ,})
};
 */

@Injectable({
  providedIn: 'root',
})
export class favouriteService {
  constructor(private http: HttpClient) {}
  Url:string='http://localhost:18352/api/Favourits';
  access:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQmVzaG95IiwianRpIjoiMTM0YmFiZmYtMDFiOS00ZGIzLWE4MGUtNzVhMzI2NzNhYTc2IiwiZXhwIjoxODA2OTQ4MzAyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjYxOTU1IiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0MjAwIn0.yBVFOm0uNyBlxTgS0EhRW2ivkgl0Dl4xaekpH6zrY-g"

   Header() {
    let header = new HttpHeaders().set("Authorization", "Bearer "+ this.access);
    const options = {
      headers: header,
    };
    return options;
  }
  GetAllFavourites(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.Url,this.Header()).pipe(catchError((err)=>{
      return throwError(err.message ||"Server Error");
    }))
  }

  DeleteFavourite(ProductId:number){
    return this.http.delete(this.Url+"/"+ProductId+"",this.Header()).pipe(catchError((err)=>{
      return throwError(err.message ||"Not allowed");
    }))
  }

  Addfavourite(ProductId:number){
    return this.http.post(this.Url+"?ProductID="+ProductId+"",this.Header()).pipe(catchError((err)=>{
      return throwError(err.message ||"Not allowed");
    }))
  }
}



/* var headers_object = new HttpHeaders({
  'Content-Type': 'application/json',
   +t)
});

    const httpOptions = {
      headers: headers_object
    };


this.http.post(
              'http://localhost:8000/api/role/Post', {limit:10}, httpOptions
             ).subscribe(resp => {
              this.roles = console.log(resp)
              }
            ); */