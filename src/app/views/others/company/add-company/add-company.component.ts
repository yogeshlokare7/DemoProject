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
import { ToasterService } from 'src/app/services/toaster.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  societyForm: FormGroup;
  title: string = "Add";
  countries: string[];
  states: State[];
  userstates: State[];
  society: Society;
  user: User;
  selectedFile: File = null;
  maxSize: number = 2097152;
  url = '';
  selectedFile2: File = null;
  maxSize2: number = 2097152;
  url2 = '';
  generic = new GenericTerm();
  isLoadingResults: boolean = false;
  roles: Role[];
  userRoles: Role[] = [];
  sub: any;
  id: number;

  constructor(private fb: FormBuilder,
    private location: Location,
    private _dataService: CountryStateService,
    private societyService: CompanyService,
    private roleService: RoleService,
    private toasterService:ToasterService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.countries = this._dataService.getCountries();
    this.createForm();
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      if (this.id != null && this.id > 0) {
        this.getSocietyInfo(this.id);
        this.title = 'Update';
      }
    });
    this.url = "data:image/png;base64," + this.generic.IMAGEDATA + "";
    this.url2 = "data:image/png;base64," + this.generic.IMAGEDATA + "";
  }

  createForm() {
    this.societyForm = this.fb.group({
      id: [''],
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
      picture: '',
    });
  }

  getSocietyInfo(societyId: number) {
    this.isLoadingResults = true;
    this.societyService.getSociety(societyId).subscribe(data => {
      this.society = data;
      this.setFormValue(this.society);
      this.isLoadingResults = false;
    }, err => {
      this.isLoadingResults = false;
    })
  }

  setFormValue(society: Society) {
    this.societyForm.patchValue({
      id:society.id as number,
      societyName: society.societyName as string,
      email: society.email as string,
      fax: society.fax as string,
      contactNo: society.contactNo as string,
      phoneNo: society.phoneNo as string,
      addressOne: society.addressOne as string,
      addressTwo: society.addressTwo as string,
      city: society.city as string,
      postalCode: society.postalCode as string,
      state: society.state as string,
      country: society.country as string,
      status: society.status as string,
      apartments: society.apartments as number,
      picture: society.picture
    });
    this.onSelect(society.country);
  }

  getRoles() {
    this.roleService.getRoles().subscribe(data => {
      this.roles = data;
      console.log("adding roles", this.userRoles);
    });
  }

  get societyName() {
    return this.societyForm.get('societyName');
  }
  get email() { return this.societyForm.get('email'); }
  get contactNo() { return this.societyForm.get('contactNo'); }
  get addressOne() { return this.societyForm.get('addressOne'); }
  get city() { return this.societyForm.get('city'); }
  get postalcode() { return this.societyForm.get('postalcode'); }

  onSelect(country: string) {
    this.states = this._dataService.getStates().filter((item) => item.country == country);
  }

  onSubmit() {
    this.society = this.societyForm.value;
    this.isLoadingResults = true;
    this.societyService.saveSociety(this.society).subscribe(data => {
      this.society = data;
      if (data!=null) {
        this.society = data;
        if (this.society != null && this.selectedFile != null) {
          this.societyService.uploadImage(this.society.id, this.selectedFile).subscribe(data => {

          });
        }
        this.toasterService.openSuccessSnackBar('Successfully updated', '', 2000);
        this.isLoadingResults = false;
      }
      this.isLoadingResults = false;
      this.goBack();
    }, (err: HttpErrorResponse) => {
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

  goBack() {
    this.location.back();
  }

}
