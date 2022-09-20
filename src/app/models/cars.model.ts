import { Pilot } from './pilots.model';
export interface Car{
    idCar : number,
    color :  string,
    pilot? : Pilot,
    distanceTraveled : number,
    statusCar : string
}