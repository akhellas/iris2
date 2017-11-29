import { Injectable } from '@angular/core';

import { MenuItem } from './models';

@Injectable()
export class MenuService {

  private _menu: MenuItem;
  private _current: MenuItem;

  constructor() {
    this.buildMenu();
    this.current = this._menu.items[0];
  }

  set current(item: MenuItem) { this._current = item; }

  get current(): MenuItem { return this._current; }

  get menu(): MenuItem { return this._menu; }

  buildMenu() {
    let documentsMenu = new MenuItem('Έγγραφα', '/documents', [
      new MenuItem('ΔΗΜΙΟΥΡΓΙΑ', '', [
        new MenuItem('Νέο', ''),
        new MenuItem('Εισαγωγή', ''),
        new MenuItem('Πρόχειρα', '')
      ]),
      new MenuItem('ΕΙΣΕΡΧΟΜΕΝΑ', '', [
        new MenuItem('Για Ενέργεια', ''),
        new MenuItem('Για Ενημέρωση', ''),
      ]),
      new MenuItem('ΕΞΕΡΧΟΜΕΝΑ', '', [
        new MenuItem('Για Υπογραφή', ''),
        new MenuItem('Σε Εξέλιξη', ''),
        new MenuItem('Για Διανομή', '')
      ]),
      new MenuItem('ΑΡΧΕΙΟ', '', [
        new MenuItem('Εισερχόμενα', ''),
        new MenuItem('Εξερχόμενα', ''),
        new MenuItem('Από Εργασίες', ''),
        new MenuItem('Αναζήτηση', '')
      ]),
      new MenuItem('ΔΙΑΦΟΡΑ', '', [
        new MenuItem('Πρωτόκολλο', ''),
        new MenuItem('Βιβλιοθήκη', '')
      ])
    ]);

    let tasksMenu = new MenuItem('Εργασίες', '/tasks', [
      new MenuItem('ΔΗΜΙΟΥΡΓΙΑ', '', [
        new MenuItem('Νέο', '')
      ]),
      new MenuItem('Εκκρεμότητες', '', [
        new MenuItem('Εισερχόμενες', ''),
        new MenuItem('Εξερχόμενες', '')
      ]),
      new MenuItem('Ολοκληρωμένες', '', [
        new MenuItem('Εισερχόμενες', ''),
        new MenuItem('Εξερχόμενες', '')
      ]),
      new MenuItem('Για Ενημέρωση', '', [
        new MenuItem('Εισερχόμενες', ''),
        new MenuItem('Εξερχόμενες', '')
      ])
    ]);

    this._menu = new MenuItem('root', '', [documentsMenu, tasksMenu]);
  }
}
