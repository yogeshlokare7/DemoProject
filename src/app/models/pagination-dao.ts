import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PageModel } from './page-model';

export class PaginationDao {

    constructor(private http: HttpClient) {

    }
  
    getList(url:string, sort1: string, order1: string, page: number, size1:number): Observable<PageModel> {
      let sort  = sort1 != null ? sort1: "companyId";
      let order = order1 != null ? order1: "desc";
      let size = size1 !=null ? size1 : 10;
      const requestUrl = `${url}?page=${page}&size=${size}&sort=${sort},${order}`;
      console.log("requestUrl=>", requestUrl);
      return this.http.get<PageModel>(requestUrl);
    }

    getListByCompanyId(url:string, sort1: string, order1: string, page: number, size1:number): Observable<PageModel> {
      let sort  = sort1 != null ? sort1: "id";
      let order = order1 != null ? order1: "desc";
      let size = size1 !=null ? size1 : 10;
      const requestUrl = `${url}?page=${page}&size=${size}&sort=${sort},${order}`;
      console.log("requestUrl=>", requestUrl);
      return this.http.get<PageModel>(requestUrl);
    }
}