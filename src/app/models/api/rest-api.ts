import { environment } from 'src/environments/environment';

export class RestApi {
    public readonly API_URL = environment.baseUrl;

    //LOGIN MODULE API
    public readonly SOCIETY_BASE = this.API_URL + '/api/auth/society';
    public readonly LOGIN_URL = this.SOCIETY_BASE + '/login';
    public readonly UPDATEPWD_URL = this.SOCIETY_BASE + '/update';
    public readonly FORGOT_URL = this.SOCIETY_BASE + '/forgot';

    //Dashboard Counterss
    public readonly DASHBOARD_URL = this.API_URL + '/api/dashboard';
    public readonly COUNTER_URL = this.DASHBOARD_URL + '/societycounters';

    //Role URL
    public readonly ROLE_URL = this.API_URL + '/api/role';
    public readonly CHECKROLEBYNAME_URL = this.ROLE_URL + '/checkRoleByName';

    //TBSM - INSERT HERE
    public readonly SOCIETY_URL = this.API_URL + '/api/society';
    public readonly USER_URL = this.API_URL + '/api/user';
    public readonly USER_FILE_URL = this.API_URL + '/api/auth/upload';

    public readonly UPLOAD_IMAGE_URL = this.API_URL + '/api/auth/others/upload';
    public readonly SECURITYUSER_LIST = this.API_URL + '/api/securityuser';
    public readonly RESIDENTUSER_LIST = this.API_URL + '/api/resident';
    public readonly USER_LIST = this.API_URL + '/api/user';
    public readonly ADMINUSERS_LIST = this.API_URL + '/api/user';

    public readonly DAILYSTAFF_LIST = this.API_URL + '/api/dailystaff';









    //OLD URL - DONT TOUCH IT
    public readonly USER_IMAGE_URL = this.USER_URL + '/uploadImage';
    public readonly CHECKUSERBYUSERNAME_URL = this.USER_URL + '/checkUserByUsername';
    public readonly CHECKUSERBYEMAIL_URL = this.USER_URL + '/checkUserByEmail';
    public readonly CHECKUSERBYTOKEN_URL = this.USER_URL + '/checkUserByToken';
    public readonly SETPWD_URL = this.USER_URL + '/setpassword';







    //CUTOMER
    public readonly CUSTOMER_URL = this.API_URL + '/api/customer';
    public readonly VENDOR_URL = this.API_URL + '/api/vendor';
    //PRODUCT URL
    public readonly PRODUCT_URL = this.API_URL + '/products';
    public readonly PRODUCTITEM_URL = this.API_URL + '/productitems';
    public readonly SALESORDER_URL = this.API_URL + '/salesorders';
    public readonly NEXTSONUMBER_URL = this.SALESORDER_URL + '/nextsonumber';
    public readonly NEXTINVNUMBER_URL = this.SALESORDER_URL + '/nextinvoicenumber';
    public readonly CREATEINVOICE_URL = this.SALESORDER_URL + '/createinvoice';
    public readonly INVOICES_URL = this.API_URL + '/invoices';
    public readonly PACKAGEORDER_URL = this.API_URL + '/packageorder';
    public readonly NEXTPKGNUMBER_URL = this.PACKAGEORDER_URL + '/nextpkgnumber';
    public readonly SHIPORDER_URL = this.API_URL + '/packageorder';
    public readonly NEXTSHIPNUMBER_URL = this.SHIPORDER_URL + '/nextshipnumber';
    public readonly PACKAGEITEM_URL = this.API_URL + '/packageitems';

    constructor() {

    }


}
