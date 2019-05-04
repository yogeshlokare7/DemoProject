import { Company } from './company';

export class SignUpInfo {
    name: string;
    username: string;
    email: string;
    role: string[];
    password: string;
    company:Company;
    status:string;

    constructor() {

    }
}
