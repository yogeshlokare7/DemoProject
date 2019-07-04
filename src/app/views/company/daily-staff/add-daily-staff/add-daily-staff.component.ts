import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { State } from 'src/app/models/state';
import { GenericTerm } from 'src/app/models/generic/generic-term';
import { DailyStaffService } from 'src/app/services/daily-staff.service';
import { DailyStaff } from 'src/app/models/daily-staff';
import { Location } from '@angular/common';
import { CountryStateService } from 'src/app/services/country-state.service';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { emailValidator } from 'src/app/directives/email-validator.directive';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-daily-staff',
  templateUrl: './add-daily-staff.component.html',
  styleUrls: ['./add-daily-staff.component.css']
})
export class AddDailyStaffComponent implements OnInit {

dailystaffForm: FormGroup;
title: string = "Add";
contries: string[];
states: State[];
dailystaff: DailyStaff; 
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
    private dailystaffService: DailyStaffService) { }

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
      this.getDailyStaffInfo(this.id);
      this.title = 'Update';
      this.isUpdate = true;
    }
  });
}
getDailyStaffInfo(id:number){
  this.isLoadingResults = true;
  this.dailystaffService.getDailyStaffByUserId(id).subscribe(data=>{
    this.dailystaff = data;
    this.setFormValue(this.dailystaff);
    this.isLoadingResults = false;
  }, err=>{
    this.isLoadingResults =false;
  })
}
setFormValue(dailystaff :DailyStaff){
  this.dailystaffForm.patchValue({
    id: dailystaff.id,
    firstname : dailystaff.firstname,
    lastname : dailystaff.lastname,
    email  : dailystaff.email,
    contactno : dailystaff.contactno,
    alternatecontact : dailystaff.alternatecontact,
    picture : dailystaff.picture,
    gender : dailystaff.gender,
    status : dailystaff.status,
    colone : dailystaff.colone,
    coltwo : dailystaff.coltwo,
    societyid : dailystaff.societyid,
    age : dailystaff.age,
    profile: dailystaff.profile,
    residentid: dailystaff.residentid,
    streetno: dailystaff.streetno,
    streetname: dailystaff.streetname,
    postalcode: dailystaff.postalcode,
    city: dailystaff.city,
    province: dailystaff.province,
    country: dailystaff.country,

  })
}
createForm(){
  this.dailystaffForm = this.fb.group({
    id: [''],
    firstname: ['', [Validators.required, Validators.minLength(3)]],
    lastname:['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, emailValidator()]],
    contactno: ['', [Validators.required]],
    alternatecontact: ['', [Validators.required]],
    picture: [''],
    gender: ['', [Validators.required]],
    status: ['Y'],
    colone: [''],
    coltwo: [''],
    societyid: [''],
    age: [''],
    profile: [''],
    residentid: [''],
    streetname: [''],
    streetno: [''],
    postalcode: [''],
    city: [''],
    province: [''],
    country: [''],
  });
}
  get firstname() { return this.dailystaffForm.get('firstname');}
  get lastname() { return this.dailystaffForm.get('lastname');}
  get username() { return this.dailystaffForm.get('username');}
  get email() { return this.dailystaffForm.get('email'); }
  get contactno() { return this.dailystaffForm.get('contactno'); }
  get alternatecontact() { return this.dailystaffForm.get('alternatecontact'); }
  get gender() { return this.dailystaffForm.get('gender'); }
  get profile() { return this.dailystaffForm.get('profile'); }
  get societyid() { return this.dailystaffForm.get('societyid'); }
  get residentid() { return this.dailystaffForm.get('residentid'); }
  get age() { return this.dailystaffForm.get('age'); }
  get streetname() { return this.dailystaffForm.get('streetname'); }
  get streetno() { return this.dailystaffForm.get('streetno'); }
  get postalcode() { return this.dailystaffForm.get('postalcode'); }
  get city() { return this.dailystaffForm.get('city'); }
  get province() { return this.dailystaffForm.get('province'); }
  get country() { return this.dailystaffForm.get('country'); }





  


  onSelect(country: string) {
    this.states = this._dataService.getStates().filter((item) => item.country == country);
  }

  onSubmit() {
    this.dailystaff = this.prepareSaveDailyStaff();
    console.log("dailystaff form", JSON.stringify(this.dailystaff));
    //.isLoadingResults = true;
    this.dailystaffService.saveDailyStaff(this.dailystaff).subscribe(data => {
      this.isLoadingResults = false;
      if(data!=null){
        let savedDailyStaff = data;
        if (savedDailyStaff != null && this.selectedFile != null) {
          this.dailystaffService.uploadImage(savedDailyStaff.id, this.selectedFile).subscribe(data => {

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
      console.log("dailystaff err", err);
    })
  }
  prepareSaveDailyStaff() : DailyStaff{
    const formModel = this.dailystaffForm.value;

    const savedDailyStaff : DailyStaff = {
    id: formModel.id as number,
    firstname: formModel.firstname  as string,
    lastname:  formModel.lastname as string,
    email:  formModel.email as string,
    contactno:  formModel.contactno as string,
    alternatecontact:  formModel.alternatecontact as string,
    picture:  formModel.picture as string,
    gender:  formModel.gender as string,
    status:  formModel.status as string,
    colone:  formModel.colone as string,
    coltwo:  formModel.coltwo as string,
    profile: formModel.profile as string,
    age: formModel.age as string,
    residentid: formModel.residentid as string,
    streetname: formModel.streetname as string,
    streetno: formModel.streetno as string,
    postalcode: formModel.postalcode as string,
    province: formModel.province as string,
    city: formModel.city as string,
    country: formModel.country as string,
    societyid: this.societyId as number,
    }
    return savedDailyStaff;
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
