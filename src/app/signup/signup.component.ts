import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  value:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  check(){
    this.value=!this.value;
  }

}