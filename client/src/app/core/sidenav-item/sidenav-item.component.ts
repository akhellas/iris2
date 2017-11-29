import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../models';

@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.sass']
})
export class SidenavItemComponent implements OnInit {

  @Input() item: MenuItem

  constructor() { }

  ngOnInit() { }

}
