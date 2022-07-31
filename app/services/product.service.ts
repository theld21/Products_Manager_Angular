import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://localhost:3000/phones"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getPhones(){
    return this.http.get(apiUrl)
  }

  getPhonesForCilent(){
    return this.http.get(`${apiUrl}?status=1`)
  }

  getPhone(id : number){
    return this.http.get(`${apiUrl}/${id}`)
  }

  deletePhone(id : number){
    return this.http.delete(`${apiUrl}/${id}`)
  }

  createPhone(obj: any){
    return this.http.post(apiUrl, obj)
  }

  updatePhone(id: number, obj: any){
    return this.http.put(`${apiUrl}/${id}`, obj)
  }

  changeStatusStudent(status: any, obj: any){
    return this.http.put(`${apiUrl}/${obj.id}`, obj)
  }
}
