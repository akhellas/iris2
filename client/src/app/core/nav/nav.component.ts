import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { MenuItem } from '../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  private _current: string;

  constructor(private menuService: MenuService) { }

  ngOnInit() { }

  setCurrent(item: MenuItem) {
    this.menuService.current = item;
    this._current = item.name;
  }

  get current(): string {
    return this._current;
  }

  get menu(): MenuItem {
    return this.menuService.menu;
  }
}
