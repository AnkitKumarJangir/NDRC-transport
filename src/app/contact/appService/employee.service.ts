import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../appModels/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    url = 'http://localhost:8080/clients';

  constructor(private http :HttpClient) { }

  addEmployee(emp:Employee){
    return this.http.post(this.url, emp);
  }
  deleteOne(id:any){
    return this.http.delete(`${this.url}/${id}`);
  }
}
