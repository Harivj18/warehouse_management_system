import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';
import { FormGroup,FormBuilder,Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  value:boolean=true;
  object:any =[];
  adduser!:FormGroup;
  alldata:any;
  constructor(private formbuilder:FormBuilder,private api:ApiCallService) {
    // this.api.connecting().subscribe(data =>{
    //   console.log(data);
    // })
   }

  ngOnInit(): void {
    this.adduser = this.formbuilder.group(
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
  
  addform(Formvalue:NgForm){
    console.log(Formvalue);
    // this.getuser()
    this.api.adduser(Formvalue).subscribe(data=>{
      console.log(data);
      });
  }
  getuser(){
    this.api.getUser().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.alldata=data;
      this.alldata=this.alldata.rows;
      console.log(this.alldata);
      for(const i in this.alldata){
        if(Object.prototype.hasOwnProperty.call(this.alldata,i)){
          const elt = this.alldata[i];
          console.log(elt.id);
          this.api.getUserId(elt.id).subscribe(res=>{
            console.log(res);
            this.object.push(res);
            console.log('Fetched successfuly in add component');
          })
        }

      }
    
    })
  }
 deluser(){
   this.api.getUser().subscribe(data=>{
     console.log(data);
     console.log('Data was ready to delete');
     this.alldata=data;
     this.alldata=this.alldata.rows;
     console.log(this.alldata);
     for (const key in this.alldata) {
       if (Object.prototype.hasOwnProperty.call(this.alldata, key)) {
         const element = this.alldata[key];
         this.api.remove(element.id).subscribe(res =>{
           console.log(res);
           this.object.delete(res);
           console.log('Object deleted successfully');
           
           
         })

         
       }
     }
     
     
     
   })
   }
 }
// }

