import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  userForm :FormGroup;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){

  }

  goBack(){

  }

  uploadFile(ev, file){

  }

  onSelect(ev:any){

  }

  onSelectSociety(ev:any){}

}
