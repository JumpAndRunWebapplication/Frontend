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

  constructor() { }

  ngOnInit(): void {
  }
}
