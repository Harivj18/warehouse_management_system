import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  value:boolean=true;
  signup!:FormGroup;
  constructor(private formbuilder:FormBuilder,private api:ApiCallService) {
    this.api.connecting().subscribe(data =>{
      console.log(data);
    })
   }

  ngOnInit(): void {
    this.signup = this.formbuilder.group(
      {
        'username':['',Validators.required],
        'first_name':['',Validators.required],
        'last_name':['',Validators.required],
        'email':['',Validators.required],
        'password':['',Validators.required],
        'confirm_password':['',Validators.required],

      }
    )
  }
  check(){
    this.value=!this.value;
  }
 
}
