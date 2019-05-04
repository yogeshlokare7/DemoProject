import { Company } from './company';
import { Role } from './role';

export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    password: string;
    streetno: string;
    streetname: string;
    city: string;
    postalcode: string;
    token: string;
    status: string;
    company: Company;
    roles: Role[];

    constructor(){
        
    }
}