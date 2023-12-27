import { Injectable } from '@angular/core';
import { Employee } from './employee';



@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  constructor() { }
  getallemployees(): Employee[] {
    return this.eployees;
  }
  getEmployeebyid(id: number): Employee | undefined {
    return this.eployees.find(Employee => Employee.id === id);
  }
  deleteemployee(id: number) {
    const index = this.eployees.findIndex((employee => employee.id === id));
    this.eployees.splice(index, 1);
  }
  employeecount(): number {

    return this.eployees.length;
  }
  nextid = 4;

  createuser(employee: Employee) {
    employee.id = this.nextid++;

    this.eployees.push(employee);
  }


  updateemployee(employeeid: number, updateemployee: Employee) {

    const index = this.eployees.findIndex(employee => employee.id === employeeid);

    this.eployees[index] = { ...updateemployee, id: employeeid }


  }



  private eployees: Employee[] = [
    {
      id: 1,
      name: "Nourhan Medhat",
      add: "Helwan",
      jopdescription: "FrontEnd Programing",
      mail: "nourhn@gmail.com",
      username: "NM",
      password: "nourhan123"
    },
    {
      id: 2,
      name: "khaled",
      add: "Helwan",
      jopdescription: "accountant",
      mail: "khaled@gmail.com",
      username: "kh",
      password: "khaled789"
    },
    {
      id: 3,
      name: " Mohammed",
      add: "Helwan",
      jopdescription: "Data entry",
      mail: "mohammed@gmail.com",
      username: "Moh",
      password: "nmnm456"
    }
  ]
}


