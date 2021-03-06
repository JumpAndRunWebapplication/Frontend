import { Component, OnInit } from '@angular/core';
import {UserRegistration} from "../model/user-registration";
import {Router} from "@angular/router";
import {UsermanagementService} from "../service/usermanagement.service";

@Component({
  selector: 'app-element-registration-panel',
  templateUrl: './element-registration-panel.component.html',
  styleUrls: ['./element-registration-panel.component.scss']
})
export class ElementRegistrationPanelComponent implements OnInit {

  user = new UserRegistration();
  errorMessage!: string;

  constructor(private registrationService: UsermanagementService, private router: Router) { }

  ngOnInit(): void {
  }

  /**
   * Calls registerUser Method from UsermangementService;
   * Navigates to "login"-webpage after successful registration
   */
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

  /**
   * navigates to "login"-webpage
   */
  goToLoginPage() {
    this.router.navigate(['/login'])
  }

}
