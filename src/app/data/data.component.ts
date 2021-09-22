import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EmployeeService } from '../contact/appService/employee.service';
import { Employee } from '../contact/appModels/employee.model';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  Emp:string[];  
  Enq:string[];  
  url = 'http://localhost:8080/clients';
  uri = 'http://localhost:8080/enquiry';

  constructor(private httpservice:HttpClient,private empService:EmployeeService) { }
  ngOnInit(): void {
    this.httpservice.get(this.url).subscribe(data=>    
    {    
      this.Emp = data as string [];      
    }); 
    this.httpservice.get(this.uri).subscribe(data=>    
    {    
      this.Enq = data as string [];      
    });  
  }
 onDeleteClient(id:any){
  if(confirm('Do you want to Delete this one'))
      {this.empService.deleteOne(id).subscribe( data=>{
     console.log(data)
     this.httpservice.get(this.url).subscribe(data=>    
      {    
        this.Emp = data as string [];      
      });
   })
   console.log({id})
   }

   }
   onDeleteEnquiry(_id:any){
    if(confirm('Do you want to Delete this one')){this.httpservice.delete(`${this.uri}/${_id}`).subscribe( data=>{
      console.log(data)
      this.httpservice.get(this.uri).subscribe(data=>    
       {    
         this.Enq = data as string [];      
       });
    })
    console.log({_id})
    }
 
    }
   
 }

