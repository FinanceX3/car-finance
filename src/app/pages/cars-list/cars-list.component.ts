import {Component, OnInit} from '@angular/core';
import {Cars} from "../../models/Cars";
import {CarsService} from "../../services/cars.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit{
  cars: Cars[] = [];

  constructor(private carService: CarsService, private router: Router) {}

  ngOnInit() {
    this.getCarList();
  }

  getCarList() {
    this.carService.getCars().subscribe(
      (response: any) => {
        if (response && response.content && Array.isArray(response.content)) {
          this.cars = response.content;
        } else {
          console.error('Error: Estructura inesperada de la respuesta del servidor');
        }
      },
      (error) => {
        console.error('Error fetching car list:', error);
      }
    );
  }

  redirectToCalculator(price: number) {
    this.router.navigate(['navigation/add-data-table', price]);
  }
}
