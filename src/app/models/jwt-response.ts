import { Company } from './company';

export class JwtResponse {
    userid:number;
    name:string;
    accessToken: string;
    type: string;
    username: string;
    authorities: string[];
    company:Company;

    constructor(){

    }
}
