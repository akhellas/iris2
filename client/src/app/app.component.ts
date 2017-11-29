import { Component } from '@angular/core';

import { MenuService } from './core/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor(private menuService: MenuService) {}
}
