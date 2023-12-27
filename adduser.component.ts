import { Component, inject , OnInit} from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  employee! : Employee[];

  
  employeeservice :EmployeeserviceService = inject(EmployeeserviceService);
  

  employeeform! : FormGroup;

  
  
  constructor(private formBuilder: FormBuilder) {
    
    this.employeeform =  this.formBuilder.group({
      name:['' ],
      add:[''],
      mail:[''],
      jopdescription:[''],
      username:[''],
      password:[''],

    })

    this.employee =  this.employeeservice.getallemployees();

  }

  adduser(){

  const employee :Employee = this.employeeform.value;
  this.employeeservice.createuser(employee);
  console.log(employee);

  }

submit(){




  }
}
