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

  /**
   * calls REST-API for creating a new User
   * @param user
   */
  public registerUser(user: UserRegistration): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/newUser", user)
    // return this.http.post<any>("http://Jumprunbackend4-env-1.eba-mzx296v5.eu-central-1.elasticbeanstalk.com/api/newUser", user)
  }

  /**
   * calls REST-API for user-login
   * @param user
   */
  public loginUser(user: UserLogin): Observable<any> {
    return this.http.post<any>("http://localhost:8080/api/login", user)
    // return this.http.post<any>("http://Jumprunbackend4-env-1.eba-mzx296v5.eu-central-1.elasticbeanstalk.com/api/login", user)
  }

  /**
   * calls REST-API for getting an existing user
   */
  public getUser(): Observable<any> {
    return this.http.get<any>("http://localhost:8080/api/getUser");
    // return this.http.get<any>("http://Jumprunbackend4-env-1.eba-mzx296v5.eu-central-1.elasticbeanstalk.com/api/getUser");
  }
}
