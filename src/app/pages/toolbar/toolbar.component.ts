import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  title = 'car-finance';
  options = [
    {path: '/home', title: 'Home'},
    {path: '/store/bundles', title: 'Historial'},
  ]
}
