import { Role } from './role';
import { Society } from './society';

export class UserModel{
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
    gender:string;
    dob: string;
    rating: string;
    status: string;
    loginallowed: string;
    colone:string;
    coltwo: string;
    apartment: string;
    societyid: Society;
    role: Role;

    constructor(){

    }
}