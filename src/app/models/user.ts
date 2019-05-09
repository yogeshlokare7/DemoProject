import { Company } from './company';
import { Role } from './role';
import { Society } from './society';

export class User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    contactno: string;
    password: string;
    streetno: string;
    streetname: string;
    postalcode: string;
    city: string;
    province: string;
    country: string;
    token: string;
    picture: string;
    gender: string;
    dob: Date;
    rating: string;
    status: string;
    loginallowed: boolean;
    colone: string;
    coltwo: string;
    apartment: string;
    societyid:Society;
    role: Role;

    constructor(){
        
    }
}