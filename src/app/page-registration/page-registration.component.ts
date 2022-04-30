import { Component, OnInit } from '@angular/core';
import {UserRegistration} from "../model/user-registration";
import {Router} from "@angular/router";
import {UsermanagementService} from "../service/usermanagement.service";

@Component({
  selector: 'app-page-registration',
  templateUrl: './page-registration.component.html',
  styleUrls: ['./page-registration.component.scss']
})
export class PageRegistrationComponent implements OnInit {

  user = new UserRegistration();
  errorMessage!: string;

  constructor(private registrationService: UsermanagementService, private router: Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this.registrationService.registerUser(this.user).subscribe(
      data => {
        this.router.navigate(['/login'])
      },
      error => {
        this.errorMessage="This username already exists.";
      }
    );
  }

  goToLoginPage() {
    this.router.navigate(['/login'])
  }

}
