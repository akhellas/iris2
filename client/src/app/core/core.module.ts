import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';

import { MenuService } from './menu.service';

import { NavComponent } from './nav/nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavItemComponent } from './sidenav-item/sidenav-item.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [NavComponent, SidenavComponent, FooterComponent, SidenavItemComponent],
  providers: [MenuService],
  exports: [NavComponent, SidenavComponent, SidenavItemComponent, FooterComponent]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}
