import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { environment } from 'src/environments/environment';
//import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  uuid!:number
  isDisabled:boolean=false
  apiUrl:string='http://localhost:3500'
  
  //environments = {apiUrl1:'http:localhost/3400'}
  constructor(private http:HttpClient) {
  }

  getShoppingDetails(page:number,pageSize:number){
    console.log(page,pageSize);
    
    return this.http.get<any>(this.apiUrl+`/cart?page=${page}&pageSize=${pageSize}`)
  }

  addShoppingDetails(details:{}){
    console.log(details)
    return this.http.post<any>(this.apiUrl+'/cart',details)
  }

  patchShoppingDetails(uuid:number){
    return this.http.get<any>(this.apiUrl+`/cart/${uuid}`)
  }

  editShoppingDetails(uuid:number,details:{}){
    return this.http.patch<any>(this.apiUrl+`/cart/${uuid}`,details)
  }

  deleteDetail(uuid:number){
    return this.http.patch<any>(this.apiUrl+`/cart1/${uuid}`,{})
  }

  countNo(){
    return this.http.get<any>(this.apiUrl+'/cartCount')
  }
}
