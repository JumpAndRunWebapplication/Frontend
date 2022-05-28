import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-main-menu',
  templateUrl: './page-main-menu.component.html',
  styleUrls: ['./page-main-menu.component.scss']
})
export class PageMainMenuComponent implements OnInit {

  gameInstance: any;

  constructor(private router: Router) { }

  /**
   * checks if Authorization JWT is undefined or null and navigates to "Login"-webpage if true;
   * creates a unityInstance and starts the implemented Unity-Game
   */
  ngOnInit(): void {
    if (localStorage.getItem('Authorization') === undefined || localStorage.getItem('Authorization') === null) {
      this.router.navigate(['/login'])
    }

    createUnityInstance(document.querySelector("#unity-canvas"), {
      dataUrl: "/assets/unityGame/Build/Jump&Run.data",
      frameworkUrl: "/assets/unityGame/Build/Jump&Run.framework.js",
      codeUrl: "/assets/unityGame/Build/Jump&Run.wasm",
    })
  }
}
