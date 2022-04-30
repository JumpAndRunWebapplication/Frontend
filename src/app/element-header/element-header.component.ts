import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {UsermanagementService} from "../service/usermanagement.service";
import {UserRegistration} from "../model/user-registration";

@Component({
  selector: 'app-element-header',
  templateUrl: './element-header.component.html',
  styleUrls: ['./element-header.component.scss']
})


export class ElementHeaderComponent implements OnInit {

  isUser = 5;
  @Input() isLoggedIn!: boolean;
  user = new UserRegistration();

  constructor(private router: Router, private service: UsermanagementService) { }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.getUser();
    }
  }

  goToLoginPage() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/login'])
  }

  getUser() {
    this.service.getUser().subscribe(
      data => {
        console.log('works');
        console.log(data);
        this.user = data;
      },
      error => {
        console.log('error');
      }
    );
  }
}
