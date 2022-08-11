import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms"
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  @ViewChild("f", { static: false }) formData: NgForm;
  constructor(private auth: AuthService,private router:Router) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log(this.formData.value)
    if (this.formData.value.password !== this.formData.value.repass) alert("password mismatch")
    if (this.formData.value.password.length < 8) alert("Password length should be eigth charactors");

    this.auth.signup({ name: this.formData.value.name, email: this.formData.value.email, password: this.formData.value.password }).subscribe((data:User) => {
      console.log(data)
      if(data.email==null) {
        alert("Email already registered");
        return;
      } 
      alert("Registred successfully")
this.router.navigate(["/add"])

    })
  }

}
