import { Pony } from './pony';
import { Race } from './race';
import {PONIES} from './ponies-mock';
//let ponies: Array<Pony>;
export const RACES: Array<Race> = [
    {id:1,ponies:[PONIES[0],PONIES[1]],location:'china',date: new Date() },
    {id:2,ponies:[PONIES[2],PONIES[3]],location:'france', date: new Date() }
];
