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

  @Input() isLoggedIn!: boolean;
  user = new UserRegistration();

  constructor(private router: Router, private service: UsermanagementService) { }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.getUser();
    }
  }

  /**
   * removes Authorization JWT from localStorage
   */
  goToLoginPage() {
    localStorage.removeItem('Authorization');
    this.router.navigate(['/login'])
    document.location.reload();
  }

  /**
   * fetches User
   * Console.Log "Error" if user is not found or other problems occur during the fetch process
   */
  getUser() {
    this.service.getUser().subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.log('error');
      }
    );
  }
}
