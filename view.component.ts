import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeserviceService } from '../employeeservice.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  employeeservice = inject(EmployeeserviceService )

  employee:Employee |undefined;
  constructor() {
    const employeeid = Number(this.route.snapshot.params['id']);
    this.employee = this.employeeservice.getEmployeebyid(employeeid);
  }

}
