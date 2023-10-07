import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { DistributedserviceService } from 'src/app/Services/distributedservice.service';

imports:[MatFormFieldControl]

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  toDisplay : boolean = false;
  LoginForm !:FormGroup;
  badgecount : any=0;

  constructor(private fb:FormBuilder,private service:DistributedserviceService,private route:Router){
    this.LoginForm = this.fb.group({
      email: ['',[Validators.email]]
    });


    // alert(this.service.setbadge());
  }
 ngOnInit(){
    // this.badgecount = this.service.setbadge();
    this.badgecount = this.service.setbadge();
    this.route.navigateByUrl('');

  }
  

  customer(){
    this.toDisplay = ! this.toDisplay;
  }
}
