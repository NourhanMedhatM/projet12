import { Component, inject } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  employees:Employee[]=[];
  employeeservice:EmployeeserviceService=inject(EmployeeserviceService)

  constructor(){
    this.employees=this.employeeservice.getallemployees();
  }
  deleteemployee(id:number){
    this.employeeservice.deleteemployee(id);
  }

}
