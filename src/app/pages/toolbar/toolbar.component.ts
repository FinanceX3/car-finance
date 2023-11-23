import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  title = 'car-finance';
  options = [
    {path: '/navigation/home', title: 'Home'},
    {path: '/navigation/list-cars', title: 'Cars'},
    {path: '/navigation/add-data-table', title: 'Calculadora'}
  ]
}
