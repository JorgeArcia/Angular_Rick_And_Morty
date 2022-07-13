import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  usuario: any;

  constructor() { }

  ngOnInit(): void {
    this.usuario = localStorage.getItem('elUser');
  }

}
