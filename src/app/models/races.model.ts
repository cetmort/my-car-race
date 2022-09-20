import { Car } from './cars.model';
export interface Race{
    car : Car,
    competitors : number,
    laps : number,
    distance : number
}