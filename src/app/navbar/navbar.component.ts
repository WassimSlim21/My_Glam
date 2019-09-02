import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:String;
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  constructor() { }

  ngOnInit() {
  }
  updateName() {
    this.name="nancy";
  }
}
