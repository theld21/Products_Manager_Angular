import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private http: HttpClient) { }

  getInfo(){
    return this.http.get(`${apiUrl}/info`)
  }
  updateInfo( obj: any){
    return this.http.put(`${apiUrl}/info`, obj)
  }

  getInfoTable(){
    return this.http.get(`${apiUrl}/info_table`)
  }
  createInfoTable( obj: any){
    return this.http.post(`${apiUrl}/info_table`, obj)
  }
  updateInfoTable( obj: any){
    return this.http.put(`${apiUrl}/info_table/${obj.id}`, obj)
  }
  deleteInfoTable( id: number){
    return this.http.delete(`${apiUrl}/info_table/${id}`)
  }

  getSkills(){
    return this.http.get(`${apiUrl}/Skills`)
  }
  updateSkill( obj: any){
    return this.http.put(`${apiUrl}/Skills/${obj.id}`, obj)
  }
  createSkill( obj: any){
    return this.http.post(`${apiUrl}/Skills`, obj)
  }
  deleteSkill( id: number){
    return this.http.delete(`${apiUrl}/Skills/${id}`)
  }

  getProjects(){
    return this.http.get(`${apiUrl}/Projects`)
  }
  updateProject( obj: any){
    return this.http.put(`${apiUrl}/Projects/${obj.id}`, obj)
  }
  createProject( obj: any){
    return this.http.post(`${apiUrl}/Projects`, obj)
  }
  deleteProject( id: number){
    return this.http.delete(`${apiUrl}/Projects/${id}`)
  }

  getSchools(){
    return this.http.get(`${apiUrl}/Schools`)
  }
  updateSchool( obj: any){
    return this.http.put(`${apiUrl}/Schools/${obj.id}`, obj)
  }
  createSchool( obj: any){
    return this.http.post(`${apiUrl}/schools`, obj)
  }
  deleteSchool( id: number){
    return this.http.delete(`${apiUrl}/schools/${id}`)
  }
}
