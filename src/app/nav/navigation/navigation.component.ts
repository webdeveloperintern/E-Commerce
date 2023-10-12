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
  inputtype = 'email';
  suffix='';
  constructor(private formbuilder:FormBuilder){
    this.LoginForm = this.formbuilder.group({
      emailorphone: ['',Validators.required],
      OTP:['',Validators.required]
    });
    
  }
  change(){
    if(this.LoginForm.controls['emailorphone'].value != ' '){
      
      if(this.LoginForm.controls['emailorphone'].value.match(/^(?!(\d)\1+$)(?:\(?\+\d{1,3}\)?[- ]?|0)?\d{10}$/)){
        // console.log(this.LoginForm.controls['emailorphone'].value);
          this.inputtype='text';
          this.suffix='phone';
          console.log("pattern added");
          this.LoginForm.controls['emailorphone'].setValidators([Validators.pattern(/^(?!(\d)\1+$)(?:\(?\+\d{1,3}\)?[- ]?|0)?\d{10}$/),Validators.minLength(10)]);
          this.LoginForm.controls['emailorphone'].removeValidators([Validators.email]);
          // if(this.LoginForm.valid) this.Hide =!this.Hide;
          if(this.LoginForm.controls['emailorphone'].hasError('Pattern')) this.errormsg = 'Enter a Valid MobileNumber';
          console.log("email removed");
      }
      else {
        this.inputtype = 'email';
        this.suffix='mail';
        console.log("emailset")
        this.LoginForm.controls['emailorphone'].setValidators([Validators.email,Validators.minLength(10)]);
        if(this.LoginForm.controls['emailorphone'].hasError('email')){this.errormsg = 'Enater a valid email';}
        this.LoginForm.controls['emailorphone'].removeValidators([Validators.pattern(/^(?!(\d)\1+$)(?:\(?\+\d{1,3}\)?[- ]?|0)?\d{10}$/)]);
        // if(this.LoginForm.valid) this.Hide =!this.Hide;
        console.log("patternremoved");
        // else this.LoginForm.controls['emailorphone'].removeValidators(Validators.email);
      }
    }
    else{
      this.LoginForm.invalid;
    }
  }

}
