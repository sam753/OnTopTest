import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'toolbar-navigation',
  templateUrl: './toolbar-navigation.component.html',
  styleUrls: ['./toolbar-navigation.component.scss']
})
export class ToolbarNavigationComponent {
  
  constructor(
    private router: Router
  ) { }

  public getHeaderStyle(route: string) {
    if (this.router.url.includes(route)) {
      return true
    } else {
      return false
    }
  }
}
