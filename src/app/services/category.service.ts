import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ICategory } from '../Shared Classes/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  GetAllCategories(): Observable<ICategory[]> {

    return this.http.get<ICategory[]>('http://localhost:18352/api/Categories').pipe(catchError((err)=>{
      return throwError(()=>err.msg||"server Error")
    }))
  }
}
