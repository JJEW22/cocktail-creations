import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverData: JSON | undefined;
  employeeData: JSON | undefined;
  employee: JSON | undefined;
  title = "all the drinks";
  
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    // this.sayHi()
    // this.getEmployee()
    // this.getAllEmployees()
  }

  sayHi() {
    this.httpClient.get('http://127.0.0.1:2222/').subscribe(data => {
      this.serverData = data as JSON;
      console.log(this.serverData);
    })
  }

  getAllEmployees() {
    this.httpClient.get('http://127.0.0.1:2222/employees').subscribe(data => {
      this.employeeData = data as JSON;
      console.log(this.employeeData);
    })
  }
  getEmployee() {
    this.httpClient.get('http://127.0.0.1:2222/employees/1').subscribe(data => {
      this.employee = data as JSON;
      console.log(this.employee);
    })
  }
}