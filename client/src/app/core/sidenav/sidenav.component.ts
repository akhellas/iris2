import { Component, OnInit } from '@angular/core';

import { MenuService } from '../menu.service';
import { MenuItem } from '../core.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass']
})
export class SidenavComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  ngOnInit() { }

  get menu(): MenuItem { return this.menuService.current; }

}
