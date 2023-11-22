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
      (data: Cars[]) => {
        this.cars = data;
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
