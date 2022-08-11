import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm} from "@angular/forms"
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrls: ['./login-account.component.css']
})
export class LoginAccountComponent implements OnInit {
  @ViewChild("f", { static: false }) formData: NgForm;
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onLogin() {
    this.auth.login({email:this.formData.value.email,password:this.formData.value.password}).subscribe(data=>{
      console.log(data);
      if(data){
        alert("successfully logged in")
        this.auth.setAuthorization(true)
        this.router.navigate(['/products'])
        return;
      }
      alert("incorrect email/password")
    })
   
  }
}
