import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../distrbuted'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DistributedserviceService {

  fakestore = "https://dummyjson.com";

  constructor(private http:HttpClient) { }
    

 getproducts():Observable<Product[]>{
  
  return this.http.get<Product[]>("https://dummyjson.com/products");
 }  

  getbadge(num:any){
     sessionStorage.setItem('count',num)
  }
  setbadge()
  {
    // alert(sessionStorage.getItem('count'));
    
    return sessionStorage.getItem('count');
  }
  
}
