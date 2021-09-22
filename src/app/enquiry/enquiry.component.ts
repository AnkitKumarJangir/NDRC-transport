import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from './appModels/student.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {
  stdForm: FormGroup;
  showMsg:boolean=false;
  constructor(private fb: FormBuilder, private stdSevice: StudentService) { }

  ngOnInit(): void {this.stdForm =this.fb.group({
      'name': new FormControl(null, [Validators.maxLength(15),Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      'email': new FormControl(null, [Validators.required,Validators.email]),
      'height': new FormControl(null,[Validators.maxLength(15),Validators.required]),
      'weight': new FormControl(null,[Validators.maxLength(15),Validators.required]),
      'width': new FormControl(null,[Validators.maxLength(15),Validators.required]),
      'freight': new FormControl(null,[Validators.maxLength(15),Validators.required]),
      'from': new FormControl(null,[Validators.maxLength(15),Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')]),
      'to': new FormControl(null,[Validators.maxLength(15),Validators.required,Validators.pattern('[a-zA-Z][a-zA-Z ]+')])
    })
  }
  onStdSubmit() {
    if (this.stdForm.valid) {
      console.log(this.stdForm.value);
      this.stdSevice.addEmployee(this.stdForm.value).subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        })
      confirm('Do you want to send this data?');
      this.showMsg=true;
      this.stdForm.reset();
    } else {
      let key = Object.keys(this.stdForm.controls);
      key.filter(data => {
        let control = this.stdForm.controls[data];
        if (control.errors != null) {
          control.markAsTouched();
        }
      })
    }
  }
}
