import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { State } from 'src/app/models/state';
import { Society } from 'src/app/models/society';
import { GenericTerm } from 'src/app/models/generic/generic-term';
import { Role } from 'src/app/models/role';
import { CountryStateService } from 'src/app/services/country-state.service';
import { RoleService } from 'src/app/services/role.service';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { SecurityuserService } from 'src/app/services/securityuser.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Residentuser } from 'src/app/models/residentuser';
import { Location } from '@angular/common';
import { ResidentuserService } from 'src/app/services/token-storage/residentuser.service';

@Component({
  selector: 'app-add-resident',
  templateUrl: './add-resident.component.html',
  styleUrls: ['./add-resident.component.css']
})
export class AddResidentComponent implements OnInit {

residentForm: FormGroup;
title: string = "Add";
contries: string[];
states: State[];
societies: Society[] = [];
resident: Residentuser; 
selectedFile: File = null;
maxsize: number = 12345678;
url = '';
selectedFile2: File = null;
maxSize2: number = 12345678;
url2 = '';
generic = new GenericTerm();
isLoadingResults: boolean = false;
roles: Role[] = [];
userRoles: Role[] = [];
maxDate = new Date();
societyId: number;
constructor(private fb: FormBuilder,
  private location: Location,
  private _dataService: CountryStateService,
  private roleService: RoleService,
  private route: ActivatedRoute,
  private tokenservice: TokenStorageService,
  private residentService: ResidentuserService) {}

  ngOnInit() {
    this.contries = this._dataService.getCountries();
    this.createForm();
    this.getRoles();
    this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    let society = this.tokenservice.getSociety();
    if(society.id != null){
      this.societyId = society.id;

    }
  } 
  
  createForm(){
    this.residentForm = this.fb.group({
      id: [''],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname:['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', Validators.required],
      contactno: ['', Validators.required],
      password: ['12345678'],
      streetno: [''],
      streetname: [''],
      postalcode: [''],
      city: [''],
      province: [''],
      country: [''],
      token: [''],
      picture: [''],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      rating: [''],
      status: ['Y'],
      loginallowed: [''],
      colone: [''],
      coltwo: [''],
      apartment: [''],
      societyid: [''],
      role: ['', [Validators.required]],
    });
  }
  get id() { return this.residentForm.get('id');}
  get firstname() { return this.residentForm.get('firstname');}
  get lastname() { return this.residentForm.get('lastname');}
  get username() { return this.residentForm.get('username');}
  get email() { return this.residentForm.get('email'); }
  get contactNo() { return this.residentForm.get('contactno'); }
  get postalcode() { return this.residentForm.get('postalcode'); }
  get city() { return this.residentForm.get('city'); }
  get province() { return this.residentForm.get('province'); }
  get country() { return this.residentForm.get('country'); }
  get token() { return this.residentForm.get('token'); }
  get picture() { return this.residentForm.get('picture'); }
  get gender() { return this.residentForm.get('gender'); }
  get dob() { return this.residentForm.get('dob'); }
  get rating() { return this.residentForm.get('rating'); }
  get status() { return this.residentForm.get('status'); }
  get loginallowed() { return this.residentForm.get('loginallowed'); }
  get colone() { return this.residentForm.get('colone'); }
  get coltwo() { return this.residentForm.get('coltwo'); }
  get apartment() { return this.residentForm.get('apartment'); }
  get societyid() { return this.residentForm.get('societyid'); }
  get role() { return this.residentForm.get('role'); }


  getRoles() {
    this.roleService.getRoles().subscribe(data => {
      this.roles = data;
      console.log("adding roles", this.roles);
    }, err=>{

    });
  }


  onSelect(country: string) {
    this.states = this._dataService.getStates().filter((item) => item.country == country);
  }

  onSubmit() {
    this.resident = this.prepareSaveUser();
    console.log("resident form", JSON.stringify(this.resident));
    //.isLoadingResults = true;
    this.residentService.saveResidentuser(this.resident).subscribe(data => {
      this.isLoadingResults = false;
      this.goBack();
    }, (err: HttpErrorResponse) => {
      this.isLoadingResults = false;
      console.log("resident err", err);
    })
  }

  prepareSaveUser() : Residentuser{
    const formModel = this.residentForm.value;

    let selectedRole = this.roles.find(y=>y.id == formModel.role);
    const saveUser : Residentuser = {
    id: formModel.id as number,
    firstname: formModel.firstname  as string,
    lastname:  formModel.lastname as string,
    username:  formModel.username as string,
    email:  formModel.email as string,
    contactno:  formModel.contactno as string,
    password:  formModel.password as string,
    streetno:  formModel.streetno as string,
    streetname:  formModel.streetname as string,
    postalcode:  formModel.postalcode as string,
    city:  formModel.city as string,
    province:  formModel.province as string,
    country:  formModel.country as string,
    token:  formModel.token as string,
    picture:  formModel.picture as string,
    gender:  formModel.gender as string,
    dob: formModel.dob as Date,
    rating:  formModel.rating as string,
    status:  formModel.status as string,
    loginallowed: formModel.loginallowed as boolean,
    colone:  formModel.colone as string,
    coltwo:  formModel.coltwo as string,
    apartment:  formModel.apartment as string,
    societyid: this.societyId as number,
    role: selectedRole as Role,
    }
    return saveUser;
  }  

  uploadFile(event, file: ElementRef) {
    if (event.target.files && event.target.files[0]) {
      let files1 = event.target.files[0];
      file['value'] = (files1) ? files1.name : '';
      this.selectedFile = files1;

      if (this.selectedFile.size < this.maxsize) {
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

      if (this.selectedFile2.size < this.maxsize) {
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

  goBack() {
    this.location.back();
  }
}
