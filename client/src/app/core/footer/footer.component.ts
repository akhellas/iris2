import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  copyRight = '\u00A9 2016-2018, Γενικό Επιτελείο Αεροπορίας - Κέντρο Μηχανογράφησης';
  version = '2.0.0';

  constructor() { }

  ngOnInit() {
  }

}
