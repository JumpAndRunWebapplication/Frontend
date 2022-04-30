import { Component, OnInit } from '@angular/core';
import {UserLogin} from "../model/user-login";
import {JwtTokenModel} from "../model/JwtTokenModel";
import {UsermanagementService} from "../service/usermanagement.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {

  isLoggedIn!: false;

  constructor(private service: UsermanagementService, private router: Router) {}

  ngOnInit(): void {
  }

}
