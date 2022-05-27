import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../model/user-login";
import {JwtTokenModel} from "../model/JwtTokenModel";
import {UsermanagementService} from "../service/usermanagement.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-element-login-panel',
  templateUrl: './element-login-panel.component.html',
  styleUrls: ['./element-login-panel.component.scss']
})
export class ElementLoginPanelComponent implements OnInit {

  user = new UserLogin();
  errorMessage!: string;
  jwt!: JwtTokenModel;

  constructor(private service: UsermanagementService, private router: Router) {}

  ngOnInit(): void {
  }

  /**
   * Calls loginUser method of UsermangementService;
   * saves JWT from response in localStorage as a header;
   */
  loginUser() {
    this.service.loginUser(this.user).subscribe(
      data => {
        this.jwt = data;
        // set jwt as 'Authorization'
        localStorage.setItem('Authorization', this.jwt.jwtToken);
        this.router.navigate(['/mainPage'])
      },
      error => {
        this.errorMessage = "Wrong username or password"
      }
    );
  }

  goToRegistrationPage() {
    this.router.navigate(['registration']);
  }
}
