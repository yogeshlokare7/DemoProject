import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { User } from 'src/app/models/user';
import { CompanyService } from 'src/app/services/company.service';
import { UserService } from 'src/app/services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Location } from '@angular/common';
import { State } from 'src/app/models/state';
import { CountryStateService } from 'src/app/services/country-state.service';
import { GenericTerm } from 'src/app/models/generic/generic-term';
import { RoleService } from 'src/app/services/role.service';
import { Role } from 'src/app/models/role';
import { Society } from 'src/app/models/society';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  firstFormGroup: FormGroup;
  title: string = "Add";
  countries: string[];
  states: State[];
  userstates: State[];
  society:Society;
  user: User;
  selectedFile: File = null;
  maxSize: number = 2097152;
  url = '';
  selectedFile2: File = null;
  maxSize2: number = 2097152;
  url2 = '';
  generic = new GenericTerm();
  isLoadingResults: boolean = false;
  roles : Role[];
  userRoles: Role[] = [];
  constructor(private fb: FormBuilder,
    private location: Location,
    private _dataService: CountryStateService,
    private companyService: CompanyService,
    private roleService:RoleService,
    private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.countries = this._dataService.getCountries();
    let id = this.route.queryParams['id'];
    console.log("id", id);
   // this.getRoles();
    this.firstFormGroup = this.fb.group({
      societyName: ['', Validators.required],
      email: ['', Validators.required],
      fax: [''],
      contactNo: ['', Validators.required],
      phoneNo: [''],
      addressOne: [''],
      addressTwo: [''],
      city: [''],
      postalCode: [''],
      state: [''],
      country: [''],
      status: ['Y'],
      apartments: ['', Validators.required],
    });
    this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    this.url2 = "data:image/png;base64," + this.generic.IMAGEDATA + "";
  }

  getRoles(){
    this.roleService.getRoles().subscribe(data=>{
      this.roles = data;
      let myRole = this.roles.find(x=>x.id ==2);
      this.userRoles.push(myRole);
      console.log("adding roles", this.userRoles);
    });
  }

  get societyName(){
    return this.firstFormGroup.get('societyName');
  }
  get email(){ return this.firstFormGroup.get('email'); }
  get contactNo(){ return this.firstFormGroup.get('contactNo'); }
  get addressOne(){ return this.firstFormGroup.get('addressOne'); }
  get city(){ return this.firstFormGroup.get('city'); }
  get postalcode(){ return this.firstFormGroup.get('postalcode'); }
  //get status(){ return this.firstFormGroup.get('status'); }

  onSelect(country:string) {
    this.states = this._dataService.getStates().filter((item)=> item.country == country);
   }
  
   onSubmit() {
    this.society = this.firstFormGroup.value;
    this.isLoadingResults = true;
    this.companyService.saveSociety(this.society).subscribe(data => {
      this.society = data;
      this.isLoadingResults =false;
      this.goBack();
    }, (err:HttpErrorResponse)=>{
      this.isLoadingResults = false;
      console.log("company err", err);
  })
}

uploadFile(event, file: ElementRef) {
  if (event.target.files && event.target.files[0]) {
    let files1 = event.target.files[0];
    file['value'] = (files1) ? files1.name : '';
    this.selectedFile = files1;

    if (this.selectedFile.size < this.maxSize) {
      let ftype = event.target.files[0].type;
      if (ftype) {
        switch (ftype) {
          case 'image/png':
            break;
          case 'image/jpg':
            break;
          case 'image/gif':
            break;
          case 'image/jpeg':
            break;
          default:
            alert("Invalid file format extension, only allowed formats are png/jpg/gif/jpeg.");
            file['value'] = '';
            this.selectedFile = null;
            this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
        }
      }
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
      reader.readAsDataURL(this.selectedFile);
    } else {
      alert("Sorry! File size should be less than 2MB.");
      file['value'] = '';
      this.selectedFile = null;
      this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    }
  }
}

uploadUserLogo(event, file: ElementRef) {
  if (event.target.files && event.target.files[0]) {
    let files = event.target.files[0];
    file['value'] = (files) ? files.name : '';
    this.selectedFile2 = files;

    if (this.selectedFile2.size < this.maxSize) {
      let ftype = event.target.files[0].type;
      if (ftype) {
        switch (ftype) {
          case 'image/png':
            break;
          case 'image/jpg':
            break;
          case 'image/gif':
            break;
          case 'image/jpeg':
            break;
          default:
            alert("Invalid file format extension, only allowed formats are png/jpg/gif/jpeg.");
            file['value'] = '';
            this.selectedFile2 = null;
            this.url2 = "data:image/png;base64," + this.generic.IMAGEDATA + "";
        }
      }
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url2 = event.target.result;
      }
      reader.readAsDataURL(this.selectedFile2);
    } else {
      alert("Sorry! File size should be less than 2MB.");
      file['value'] = '';
      this.selectedFile2 = null;
      this.url2 = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    }
  }
}

goBack(){
  this.location.back();
}

}
