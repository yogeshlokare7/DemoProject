import { Society } from './society';

export class User {
    id: number;
    firstname: string;
    lastname: string;
    username: string;
    email: string;
    contactno: string;
    picture: string;
    gender: string;
    status: string;
    societyid:Society;
    constructor(){
        
    }
}