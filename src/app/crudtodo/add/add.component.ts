import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import Employe from 'src/app/Employe';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  angForm: FormGroup;
  employees:Employe[];
  constructor(private fb: FormBuilder) {
  }
  ngOnInit() {
    this.angForm=new FormGroup({
      fName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      lName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      id: new FormControl('',[Validators.required,Validators.minLength(5)]),
      num: new FormControl('',[Validators.required,Validators.minLength(8)]),
    });
  this.employees=JSON.parse(localStorage.getItem('listEmploye'));
  }
  add()
  {
    console.log(this.angForm.value);
        // constructor(fName: string, lName: string, num:Number, id: Number)
    this.employees.push(new Employe(this.angForm.value.fName,this.angForm.value.lName,this.angForm.value.num,this.angForm.value.id));
   
    localStorage.setItem('listEmploye',JSON.stringify(this.employees));
  }

  }

 

