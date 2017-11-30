import { Injectable } from '@angular/core';

import { MenuItem } from './core.model';

@Injectable()
export class MenuService {

  private _menu: MenuItem;
  private _current: MenuItem;

  isOpen: boolean = true;

  constructor() {
    this.buildMenu();
    this.current = this._menu.items[0];
  }

  set current(item: MenuItem) { this._current = item; }

  get current(): MenuItem { return this._current; }

  get menu(): MenuItem { return this._menu; }

  toggleMenu() {
    this.isOpen = !this.isOpen
  }

  buildMenu() {
    let documentsMenu = new MenuItem('Έγγραφα', 'documents', [
      new MenuItem('ΔΗΜΙΟΥΡΓΙΑ', '', [
        new MenuItem('Νέο', 'documents/new'),
        new MenuItem('Εισαγωγή', 'documents/insert'),
        new MenuItem('Πρόχειρα', 'documents/drafts')
      ]),
      new MenuItem('ΕΙΣΕΡΧΟΜΕΝΑ', '', [
        new MenuItem('Για Ενέργεια', 'documents/inbox/action'),
        new MenuItem('Για Ενημέρωση', 'documents/inbox/info'),
      ]),
      new MenuItem('ΕΞΕΡΧΟΜΕΝΑ', '', [
        new MenuItem('Για Υπογραφή', 'documents/outbox/pending'),
        new MenuItem('Σε Εξέλιξη', 'documents/outbox/inprogress'),
        new MenuItem('Για Διανομή', 'documents/outbox/distribution')
      ]),
      new MenuItem('ΑΡΧΕΙΟ', '', [
        new MenuItem('Εισερχόμενα', 'documents/archive/inbox'),
        new MenuItem('Εξερχόμενα', 'documents/archive/outbox'),
        new MenuItem('Από Εργασίες', 'documents/archive/tasks'),
        new MenuItem('Αναζήτηση', 'documents/archive/search')
      ]),
      new MenuItem('ΔΙΑΦΟΡΑ', '', [
        new MenuItem('Πρωτόκολλο', 'registry'),
        new MenuItem('Βιβλιοθήκη', 'library')
      ])
    ]);

    let tasksMenu = new MenuItem('Εργασίες', 'tasks', [
      new MenuItem('ΔΗΜΙΟΥΡΓΙΑ', '', [
        new MenuItem('Νέο', 'tasks/new')
      ]),
      new MenuItem('ΕΚΚΡΕΜΟΤΗΤΕΣ', '', [
        new MenuItem('Εισερχόμενες', 'tasks/pending/inbox'),
        new MenuItem('Εξερχόμενες', 'tasks/pending/outbox')
      ]),
      new MenuItem('ΟΛΟΚΛΗΡΩΜΕΝΕΣ', '', [
        new MenuItem('Εισερχόμενες', 'tasks/complete/inbox'),
        new MenuItem('Εξερχόμενες', 'tasks/complete/outbox')
      ]),
      new MenuItem('ΓΙΑ ΕΝΗΜΕΡΩΣΗ', '', [
        new MenuItem('Εισερχόμενες', 'tasks/info/inbox'),
        new MenuItem('Εξερχόμενες', 'tasks/info/outbox')
      ])
    ]);

    let issuesMenu = new MenuItem('Θέματα', 'issues', [
      new MenuItem('ΔΗΜΙΟΥΡΓΙΑ', '', [
        new MenuItem('Νέο', 'issues/new')
      ]),
      new MenuItem('ΑΝΑ ΚΑΤΑΣΤΑΣΗ', '', [
        new MenuItem('Μη Αναγνωσμένα', 'issues/unread'),
        new MenuItem('Σε Εξέλιξη', 'issues/pending'),
        new MenuItem('Ληξιπρόθεσμα', 'issues/delayed'),
        new MenuItem('Ολοκληρωμένα', 'issues/complete')
      ])
    ]);

    this._menu = new MenuItem('root', '', [documentsMenu, tasksMenu, issuesMenu]);
  }
}
