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
import { emailValidator } from 'src/app/directives/email-validator.directive';
import { ToasterService } from 'src/app/services/toaster.service';

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
resident: Residentuser; 
selectedFile: File = null;
maxsize: number = 12345678;
url = '';
selectedFile2: File = null;
maxSize2: number = 12345678;
url2 = '';
generic = new GenericTerm();
isLoadingResults: boolean = false;
maxDate = new Date();
societyId: number = 0;
isUpdate:boolean = false;
id:number;
sub:any;


constructor(private fb: FormBuilder,
  private location: Location,
  private _dataService: CountryStateService,
  private route: ActivatedRoute,
  private tokenservice: TokenStorageService,
  private toasterService:ToasterService,
  private residentService: ResidentuserService) {}

  ngOnInit() {
    this.contries = this._dataService.getCountries();
    this.createForm();
    this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    let society = this.tokenservice.getSociety();
    if(society.id != null){
      this.societyId = society.id;
    }
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id != null && this.id > 0) {
        this.getResidentInfo(this.id);
        this.title = 'Update';
        this.isUpdate = true;
      }
    });
  } 

  getResidentInfo(id:number){
    this.isLoadingResults = true;
    this.residentService.getResidentuserByUserId(id).subscribe(data=>{
      this.resident = data;
      this.setFormValue(this.resident);
      this.isLoadingResults = false;
    }, err=>{
      this.isLoadingResults =false;
    })
  }

  setFormValue(resident :Residentuser){
    this.residentForm.patchValue({
      id: resident.id,
      firstname : resident.firstname,
      lastname : resident.lastname,
      username : resident.username,
      email  : resident.email,
      contactno : resident.contactno,
      alternatecontact : resident.alternatecontact,
      password : resident.password,
      token : resident.token,
      picture : resident.picture,
      gender : resident.gender,
      status : resident.status,
      loginallowed : resident.loginallowed,
      colone : resident.colone,
      coltwo : resident.coltwo,
      apartment : resident.apartment,
      societyid : resident.societyid,
      age : resident.age,
      flatnumber : resident.flatnumber,
      floornumber : resident.floornumber,

    })
  }
  
  createForm(){
    this.residentForm = this.fb.group({
      id: [''],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname:['', [Validators.required, Validators.minLength(3)]],
      username: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, emailValidator()]],
      contactno: ['', [Validators.required]],
      alternatecontact: ['', [Validators.required]],
      password: ['12345678'],
      token: [''],
      picture: [''],
      gender: ['', [Validators.required]],
      status: ['Y'],
      loginallowed: [''],
      colone: [''],
      coltwo: [''],
      apartment: [''],
      societyid: [''],
      age: [''],
      floornumber: [''],
      flatnumber: [''],
    });
  }
  get firstname() { return this.residentForm.get('firstname');}
  get lastname() { return this.residentForm.get('lastname');}
  get username() { return this.residentForm.get('username');}
  get email() { return this.residentForm.get('email'); }
  get contactno() { return this.residentForm.get('contactno'); }
  get alternatecontact() { return this.residentForm.get('alternatecontact'); }
  get gender() { return this.residentForm.get('gender'); }

  onSelect(country: string) {
    this.states = this._dataService.getStates().filter((item) => item.country == country);
  }

  onSubmit() {
    this.resident = this.prepareSaveResident();
    console.log("resident form", JSON.stringify(this.resident));
    //.isLoadingResults = true;
    this.residentService.saveResidentuser(this.resident).subscribe(data => {
      this.isLoadingResults = false;
      if(data!=null){
        let savedResident = data;
        if (savedResident != null && this.selectedFile != null) {
          this.residentService.uploadImage(savedResident.id, this.selectedFile).subscribe(data => {

          });
        }
        if(this.isUpdate){
          this.toasterService.openSuccessSnackBar('Successfully Updated', '', 2000);
        }else{
          this.toasterService.openSuccessSnackBar('Successfully Added', '', 2000);
        }
        this.isLoadingResults = false;
      }
      this.goBack();
    }, (err: HttpErrorResponse) => {
      this.isLoadingResults = false;
      console.log("resident err", err);
    })
  }

  prepareSaveResident() : Residentuser{
    const formModel = this.residentForm.value;

    const saveResident : Residentuser = {
    id: formModel.id as number,
    firstname: formModel.firstname  as string,
    lastname:  formModel.lastname as string,
    username:  formModel.username as string,
    email:  formModel.email as string,
    contactno:  formModel.contactno as string,
    alternatecontact:  formModel.alternatecontact as string,
    password:  formModel.password as string,
    floornumber:  formModel.floornumber as string,
    flatnumber:  formModel.flatnumber as string,
    age:  formModel.age as number,

    token:  formModel.token as string,
    picture:  formModel.picture as string,
    gender:  formModel.gender as string,
    status:  formModel.status as string,
    loginallowed: formModel.loginallowed as boolean,
    colone:  formModel.colone as string,
    coltwo:  formModel.coltwo as string,
    apartment:  formModel.apartment as string,
    societyid: this.societyId as number,
    }
    return saveResident;
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
