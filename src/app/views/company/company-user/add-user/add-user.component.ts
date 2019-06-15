import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CountryStateService } from 'src/app/services/country-state.service';
import { State } from 'src/app/models/state';
import { Company } from 'src/app/models/company';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Location } from '@angular/common';
import { Role } from 'src/app/models/role';
import { Society } from 'src/app/models/society';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { CompanyService } from 'src/app/services/company.service';
import { GenericTerm } from 'src/app/models/generic/generic-term';
import { SecurityuserService } from 'src/app/services/securityuser.service';
import { Securityuser } from 'src/app/models/securityuser';
import { ToasterService } from 'src/app/services/toaster.service';
import { emailValidator } from 'src/app/directives/email-validator.directive';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']

})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  title: string = "Add";
  countries: string[];
  states: State[];
  userstates: State[];
  societies: Society[] = [];
  user: Securityuser;
  selectedFile: File = null;
  maxSize: number = 2097152;
  url = '';
  selectedFile2: File = null;
  maxSize2: number = 2097152;
  url2 = '';
  generic = new GenericTerm();
  isLoadingResults: boolean = false;
  roles: Role[] = [];
  userRoles: Role[] = [];
  maxDate  = new Date();
  societyId  : number;
  sub:any;
  id : number;
  isUpdate:boolean = false;
  constructor(private fb: FormBuilder,
    private location: Location,
    private _dataService: CountryStateService,
    private companyService: CompanyService,
    private roleService: RoleService,
    private route: ActivatedRoute,
    private tokenservice: TokenStorageService,
    private toasterService: ToasterService,
    private securityuserService: SecurityuserService) { }

  ngOnInit() {
    this.countries = this._dataService.getCountries();
    this.createForm();
    this.getRoles();
    this.getSocietyList();
    this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    let society = this.tokenservice.getSociety();
    if(society.id != null){
      this.societyId = society.id;
    }
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id != null && this.id > 0) {
        this.getUserInfo(this.id);
        this.title = 'Update';
        this.isUpdate = true;
      }
    });
  }
  getUserInfo(id:number){
    this.isLoadingResults = true;
    this.securityuserService.getSecurityuserByUserId(id).subscribe(data=>{
      this.user = data;
      this.setFormValue(this.user);
      this.isLoadingResults = false;
    }, err=>{
      this.isLoadingResults =false;
    })
  }

  setFormValue(user :Securityuser){
    this.userForm.patchValue({
      id: user.id,
      firstname : user.firstname,
      lastname : user.lastname,
      username : user.username,
      email  : user.email,
      contactno : user.contactno,
      country : user.country,
      password : user.password,
      token : user.token,
      picture : user.picture,
      gender : user.gender,
      status : user.status,
      loginallowed : user.loginallowed,
      colone : user.colone,
      coltwo : user.coltwo,
      apartment : user.apartment,
      societyid : user.societyid,
      dob : user.dob,
      postalcode : user.postalcode,
      city : user.city,
      province : user.province,
      streetname : user.streetname,
      streetno : user.streetno,
      rating : user.rating,
      role : user.role,

    })
  }


  createForm(){
    this.userForm = this.fb.group({
      id: [''],
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname:['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', Validators.required, emailValidator()],
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
  get firstname() { return this.userForm.get('firstname');}
  get lastname() { return this.userForm.get('lastname');}
  get username() { return this.userForm.get('username');}
  get email() { return this.userForm.get('email'); }
  get contactNo() { return this.userForm.get('contactno'); }
  get postalcode() { return this.userForm.get('postalcode'); }
  get city() { return this.userForm.get('city'); }
  get province() { return this.userForm.get('province'); }
  get country() { return this.userForm.get('country'); }
  get token() { return this.userForm.get('token'); }
  get picture() { return this.userForm.get('picture'); }
  get gender() { return this.userForm.get('gender'); }
  get dob() { return this.userForm.get('dob'); }
  get rating() { return this.userForm.get('rating'); }
  get status() { return this.userForm.get('status'); }
  get loginallowed() { return this.userForm.get('loginallowed'); }
  get colone() { return this.userForm.get('colone'); }
  get coltwo() { return this.userForm.get('coltwo'); }
  get apartment() { return this.userForm.get('apartment'); }
  get societyid() { return this.userForm.get('societyid'); }
  get role() { return this.userForm.get('role'); }


  getRoles() {
    this.roleService.getRoles().subscribe(data => {
      this.roles = data;
      console.log("adding roles", this.roles);
    }, err=>{

    });
  }

  getSocietyList(){
    this.companyService.getSocietyList().subscribe(data=>{
      this.societies = data;
    }, err=>{

    })
  }

  onSelect(country: string) {
    this.states = this._dataService.getStates().filter((item) => item.country == country);
  }

  onSubmit() {
    this.user = this.prepareSaveUser();
    console.log("user form", JSON.stringify(this.user));
    //.isLoadingResults = true;
    this.securityuserService.saveSecurityuser(this.user).subscribe(data => {
      this.isLoadingResults = false;
      if(data!=null){
        let savedResident = data;
        if (savedResident != null && this.selectedFile != null) {
          this.securityuserService.uploadImage(savedResident.id, this.selectedFile).subscribe(data => {

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
      console.log("user err", err);
    })
  }

  prepareSaveUser() : Securityuser{
    const formModel = this.userForm.value;

    let selectedRole = this.roles.find(y=>y.id == formModel.role);
    const saveUser : Securityuser = {
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

  goBack() {
    this.location.back();
  }
}
