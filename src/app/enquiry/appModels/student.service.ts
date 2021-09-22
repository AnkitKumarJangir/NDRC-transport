
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student} from '../appService/student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = 'http://localhost:8080/enquiry';

  constructor(private http :HttpClient) { }

  addEmployee(std:Student){
    return this.http.post(this.url, std);
  }
}
