import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistributedserviceService {

  constructor() { }
    

  getbadge(num:any){
     sessionStorage.setItem('count',num)
  }
  setbadge()
  {
    // alert(sessionStorage.getItem('count'));
    
    return sessionStorage.getItem('count');
  }
  
}
