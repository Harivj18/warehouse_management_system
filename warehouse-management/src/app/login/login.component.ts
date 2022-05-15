import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, NgForm } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { login } from '../service/loginmodel';
import { ServiceapiService } from '../serviceapi.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform!:FormGroup;
  logdata:login=new login();
  constructor(private formbuilder:FormBuilder,private serve:ServiceapiService) { }

  ngOnInit(): void {
  this.loginform=this.formbuilder.group(
    {
      username:['',Validators.required],
      password:['',Validators.required],
    }
  )
  }
  // getdata(){
  //   this.api.createDB("first_sample").subscribe(res=>{
  //     console.log(res);
  //     alert("db connected successfully!!!");
  //   },err=>{
  //     console.log("oops!");
  //   }
  //     )
  // }
  login(Formvalue:NgForm){
        this.serve.logindata(Formvalue).subscribe((data)=>{
        console.log('login.ts',Formvalue);
        console.log(data);
        
          
        })
  }
 

}
