import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = 'http://localhost:8081/square/v1';

  constructor(private http:HttpClient) { }

  addRoles(data:any):Observable<any>{
    return this.http.post(`${this.baseUrl}/role`,data);
  }

  getRoles():Observable<any>{
    return this.http.get(`${this.baseUrl}/role`);
  }
}
