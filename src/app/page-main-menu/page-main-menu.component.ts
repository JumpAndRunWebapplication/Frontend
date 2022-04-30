import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-main-menu',
  templateUrl: './page-main-menu.component.html',
  styleUrls: ['./page-main-menu.component.scss']
})
export class PageMainMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('Authorization') === undefined || localStorage.getItem('Authorization') === null) {
      this.router.navigate(['/login'])
    }

    createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "/assets/demo/Build/Jump&Run.data",
      frameworkUrl: "/assets/demo/Build/Jump&Run.framework.js",
      codeUrl: "/assets/demo/Build/Jump&Run.wasm",
    })
  }
}
