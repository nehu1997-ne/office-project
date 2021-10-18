import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup} from '@angular/forms'
import { ApiService } from 'src/app/shared/api.service';
import { EmployeeModel } from './employee-dash.model';

@Component({
  selector: 'app-uregistration',
  templateUrl: './uregistration.component.html',
  styleUrls: ['./uregistration.component.css']
})
export class UregistrationComponent implements OnInit {
formValue !:FormGroup;
employeeModelObj: EmployeeModel =new EmployeeModel()
  constructor(private formbuilber:FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      firstName:[''],
      email:[''],
      mobile:[''],
      age:[''],
      address:['']


      
    })
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstName =this.formValue.value.firstName;
        this.employeeModelObj.email =this.formValue.value.email;
            this.employeeModelObj.mobile =this.formValue.value.mobile;
                this.employeeModelObj.age =this.formValue.value.age;
                  this.employeeModelObj.address =this.formValue.value.address;


                  this.api.postEmploye(this.employeeModelObj)
                  .subscribe(res=>{
                    console.log(res);
                    alert("empoyeee added succesfully")
                    this.formValue.reset();
                  },
                  (err:any)=>{
                    alert("hello")
                  })
                  
  }

}
