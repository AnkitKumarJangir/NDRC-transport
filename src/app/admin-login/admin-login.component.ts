import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admForm: FormGroup
  flash:boolean = true;
  username: string;
  password: string;
  $username = 'An';
  $password = 'ad';
  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.admForm = this.fb.group({
      'username': new FormControl(null, [Validators.maxLength(15), Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      'password': new FormControl(null, [Validators.required])

    })
  }
  
   onAdmSubmit() {
 
    if (this.admForm.value.username === this.$username && this.admForm.value.password == this.$password) {
      console.log("match"); 
      this.router.navigate(['./data'])
    } 
    else {
      
      let key = Object.keys(this.admForm.controls);
      key.filter(data => {
        let control = this.admForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
          
        }
      })
    }if(this.admForm.value.username!== this.$username && this.admForm.value.password!== this.$password) {
      alert('invalid')
      let key = Object.keys(this.admForm.controls);
      key.filter(data => {
        let control = this.admForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
          
        }
      })
    }
    if(this.admForm.value.username== this.$username && this.admForm.value.password!== this.$password) {
      alert('invalid')
      let key = Object.keys(this.admForm.controls);
      key.filter(data => {
        let control = this.admForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
          
        }
      })
    }
    if(this.admForm.value.username!== this.$username && this.admForm.value.password== this.$password) {
      alert('invalid')
      let key = Object.keys(this.admForm.controls);
      key.filter(data => {
        let control = this.admForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
          
        }
      })
    }
     
  }
}