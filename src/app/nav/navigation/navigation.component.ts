import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

imports:[MatFormFieldControl]

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  toDisplay : boolean = false;
  LoginForm !:FormGroup;

  constructor(private fb:FormBuilder){}
  ngOnInit(): void{
    this.LoginForm = this.fb.group({
      email: ['',[Validators.email]]
    });
  }

  customer(){
    this.toDisplay = ! this.toDisplay;
  }
}
