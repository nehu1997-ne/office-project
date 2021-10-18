import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  postEmploye(data:any):Observable<any>{

    return this.http.post<any>("http://localhost:3000/posts",data);
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }
getEmployee():Observable<any> {

    return this.http.get<any>("http://localhost:3000/posts");
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }
   updateEmployee(data:any, id:number):Observable<any>{

    return this.http.put<any>("http://localhost:3000/posts"+id,data)
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }
  deleteEmployee(id:number):Observable<any>{

    return this.http.delete<any>("http://localhost:3000/posts"+id)
    // .pipe(map((res:any)=>{
    //   return res;
    // }))
  }
}
