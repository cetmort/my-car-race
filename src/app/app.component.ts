import { Component } from '@angular/core';
import { Pilot } from './models/pilots.model';
import { Car } from './models/cars.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-car-race';
  
  Race(){

    const PILOT_ONE : Pilot = {
      idPilot : 1,
      name : 'Rodrigo',
      lastName : 'De los santos',
      nationality : 'Mexico'
    }

    const PILOT_TWO : Pilot = {
      idPilot : 1,
      name : 'Thomas Andre',
      lastName : 'Leyny',
      nationality : 'USA'
    }

    const PILOT_THREE : Pilot = {
      idPilot : 1,
      name : 'Anthony',
      lastName : 'Framil',
      nationality : 'France'
    }

    const PILOT_FOUR : Pilot = {
      idPilot : 1,
      name : 'Claren',
      lastName : 'Smith',
      nationality : 'USA'
    }

    const  Car1 : Car = {
      idCar : 1,
      color :  'Red',
      pilot : PILOT_ONE,
      distanceTraveled : 0,
      statusCar : 'Detenido'
    }

    const  Car2 : Car = {
      idCar : 2,
      color :  'Blue',
      pilot : PILOT_TWO,
      distanceTraveled : 0,
      statusCar : 'Detenido'
    }

    const  Car3 : Car = {
      idCar : 3,
      color :  'Red-Blue',
      pilot : PILOT_THREE,
      distanceTraveled : 0,
      statusCar : 'Detenido'
    }

    const  Car4 : Car = {
      idCar : 4,
      color :  'Black',
      pilot : PILOT_FOUR,
      distanceTraveled : 0,
      statusCar : 'Detenido'
    }
    
    const  Car5 : Car = {
      idCar : 4,
      color :  'Black',
      distanceTraveled : 0,
      statusCar : 'Detenido'
    }

  }
  
  startRace(){
    
  }

  constructor(){
  
  }
}
