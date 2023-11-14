import { Injectable } from '@angular/core';
import {Users} from "../models/Users";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {catchError, Observable, retry, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService{

  basePath=environment.serverBasePath;
  url: string= `/users`

  private resourcePath():string{
    return `${this.basePath}${this.url}`
  }

  constructor(private http:HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  createUser(item: any): Observable<Users>{
    return this.http
      .post<Users>(this.resourcePath(), JSON.stringify(item), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError))
  }

  handleError( error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`An error occured ${error.status}, body was: ${error.error}`);
    } else {
      console.log(`An error occured ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, try again later...')
  }
}
