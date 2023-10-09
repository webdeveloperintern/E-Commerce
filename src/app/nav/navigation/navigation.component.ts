import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  badgecount : any=0;

  constructor(private fb:FormBuilder,private service:DistributedserviceService,private route:Router,public dialog: MatDialog){
   


    // alert(this.service.setbadge());
  }
 ngOnInit(){
    // this.badgecount = this.service.setbadge();
    this.badgecount = this.service.setbadge();
    this.openDialog();
    this.route.navigateByUrl('');

  }
  

  openDialog(){
    this.dialog.open(DialogElementsExampleDialog);

  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: 'dialog-elements-example-dialog.html',
  // standalone: true,
  styleUrls: ['./navigation.component.css']
})
export class DialogElementsExampleDialog {


  LoginForm !:FormGroup;
  Hide:boolean = true;
  errormsg = '';
  constructor(private formbuilder:FormBuilder){
    this.LoginForm = this.formbuilder.group({
      emailorphone: [''],
      OTP:['']
    });
    
  }
  

    ngOnInit(){
      if (this.LoginForm.controls['emailorphone'].value.match(/^(\+)?([0-9]+)$/)) {
      this.LoginForm.controls['emailorphone'].addValidators([Validators.required, Validators.maxLength(10),Validators.pattern('/^(\+)?([0-9]+)$/')]);
      this.errormsg = 'Enater a valid Mobile Number';
      this.LoginForm.controls['OTP'].addValidators(Validators.required)
      } else {
      this.LoginForm.controls['emailorphone'].addValidators([Validators.required, Validators.email]);
      this.errormsg = 'Enater a valid email';
      this.LoginForm.controls['OTP'].addValidators(Validators.required)
      }
      

      
    }
    
  

}
