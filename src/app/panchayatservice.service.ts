import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PanchayatserviceService {

  constructor(private http:HttpClient ) {}
  
  usignup(data:any){

    return this.http.post<any>('http://localhost:3000/us',data)

  }

  asignup(dataa:any){

    return this.http.post<any>('http://localhost:3000/as',dataa)

  }

  usernews(datan:any){

    return this.http.post<any>('http://localhost:3000/n',datan)

  }
  
  userview=()=>{
    return this.http.get('http://localhost:3000/userview')
  }

 
  }












