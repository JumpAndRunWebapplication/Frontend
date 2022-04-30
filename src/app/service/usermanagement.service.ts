import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserRegistration} from "../model/user-registration";
import {UserLogin} from "../model/user-login";

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  constructor(private http: HttpClient) { }

  public registerUser(user: UserRegistration): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/newUser", user)
  }

  public loginUser(user: UserLogin): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/login", user)
  }

  public getUser(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/getUser");
  }
}
