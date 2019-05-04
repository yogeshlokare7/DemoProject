import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CountryStateService } from 'src/app/services/country-state.service';
import { State } from 'src/app/models/state';
import { Company } from 'src/app/models/company';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Location } from '@angular/common';
import { Role } from 'src/app/models/role';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']

})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  title: string = "Add";
  countries: String[];
  states: State[];
  company :Company;
  user:User;

  roles : Role[] = [];
  userRole = new Role();
  constructor(private fb : FormBuilder,
    private tokenService:TokenStorageService,
    private userService: UserService,
    private location : Location,
    private dataService: CountryStateService) { }

  ngOnInit() {
    this.createForm();
    this.countries = this.dataService.getCountries();
    this.company = this.tokenService.getCompany();
    this.setCompanyInForm(this.company);
    this.roles.push(this.userRole);
  }

  setCompanyInForm(cmp: Company){
    this.userForm.patchValue({
      company: cmp
    })
  }

  createForm(){
    this.userForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required,Validators.minLength(3), Validators.maxLength(30)]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contact: ['',[Validators.required,Validators.minLength(10), Validators.maxLength(13)]],
      alternatecontact: [''],
      password: ['12345678'],
      company:[''],
      streetno: [''],
      streetname: [''],
      city: [''],
      postalcode: [''],
      state: [''],
      country: [''],
      status:['Y'],
      roles: ['']
    });
  }

  get name(){ 
    return this.userForm.get('name'); 
  }
  get useremail(){ 
    return this.userForm.get('email'); 
  }
  get username(){
    return this.userForm.get('username');
  }
  get contact(){ return this.userForm.get('contact'); }

  onUserSelect(country:string){
    this.states = this.dataService.getStates().filter((item)=> item.country == country);
  }

  onSubmit(){
    let formModel = this.userForm.value;
    console.log("data", JSON.stringify(formModel));
    this.user = this.prepareSaveUser(formModel);
    this.userService.saveUser(this.user).subscribe(data => {
      console.log("user", data)
      this.location.back();
    });
  }

  prepareSaveUser(formModel : any) : User{
    const saveUser : User = {
      id: formModel.id,
      name: formModel.name,
      username:formModel.username,
      email: formModel.email,
      password: formModel.password,
      streetno: formModel.streetno,
      streetname: formModel.streetname,
      city: formModel.city,
      postalcode: formModel.postalcode,
      token: formModel.token,
      status: formModel.status,
      company: formModel.company,
      roles: this.roles
    }
    return saveUser;
  }
}


