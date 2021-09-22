
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './appService/employee.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  empForm: FormGroup;
  showMsg: boolean = false;

  constructor( private fb: FormBuilder,private empSevice:EmployeeService) {
   }
  
  ngOnInit(): void {this.empForm =this.fb.group({
    'name': new FormControl(null, [Validators.maxLength(15),Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
    'email': new FormControl(null, [Validators.required,Validators.email]),
    'massage': new FormControl(null,[Validators.required])
  })
  }
onSubmit(){

}
onEmpSubmit(){
  if(this.empForm.valid){
    console.log(this.empForm.value);
    this.empSevice.addEmployee(this.empForm.value).subscribe(
      (res) =>{
        console.log(res);
      },
      (err) =>{
        console.log(err);
      })
      this.showMsg=true;
      this.empForm.reset();
      

      
  }else{
    let key = Object.keys(this.empForm.controls);
    key.filter(data =>{
      let control = this.empForm.controls[data];
      if(control.errors !=null){
        control.markAsTouched();
      }
    })
  }
}
}
