import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {EmployeeserviceService} from '../employeeservice.service';
import { Employee } from '../employee';
@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent {
  updateemployeeform! : FormGroup;
  Employeeid!:number;


constructor( private formbuilder:FormBuilder ,private  employeeservice :EmployeeserviceService ,private route:ActivatedRoute  ){

  this.updateemployeeform =  this.formbuilder.group({
    name:['' ],
    add:[''],
    jopdescriptio:[''],
    email:[''],
    username:[''],
    password:[''],

  })


}


ngOnInit() {
  this.route.params.subscribe(params => {
    this.Employeeid = +params['id'];
    this.loademployeeDetails();
  });
}

loademployeeDetails() {
  const useeee = this.employeeservice.getEmployeebyid(this.Employeeid);

  if (useeee) {
    this.updateemployeeform.patchValue(useeee);
  } else {
  
  }
}

updateemployee() {
  if (this.updateemployeeform.valid) {
    const updatedemployee: Employee = {
      id: this.Employeeid,
      ...this.updateemployeeform.value
    };

    this.employeeservice.updateemployee (this.Employeeid,updatedemployee);
  
  }
}


}
