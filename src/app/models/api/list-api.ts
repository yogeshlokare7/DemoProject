import { environment } from 'src/environments/environment';

export class ListApi{
    myBaseUrl = environment.baseUrl;

    public readonly SOCIETY_LIST = this.myBaseUrl + '/api/society';
    public readonly USER_LIST = this.myBaseUrl + '/api/user/list';

    public readonly ROLE_LIST = this.myBaseUrl + '/api/role';

    
}