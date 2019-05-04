import { Component, OnInit, Inject } from '@angular/core';
import { VendorService } from 'src/app/services/vendor.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Vendor } from 'src/app/models/vendor';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { CountryStateService } from 'src/app/services/country-state.service';
import { State } from 'src/app/models/state';

@Component({
  selector: 'app-addvendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
  vendorForm: FormGroup;
  vendor : Vendor;
  countries: string[];
  states: State[];
  shipstates:State[];
  title: string = "Add";
  options: string[] =  ['Mr.', 'Mrs.', 'Ms', 'Miss', 'Dr.']
  cmpId: number;
  constructor(
    public dialogRef: MatDialogRef<AddVendorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private vendorService:VendorService,
    private tokenService: TokenStorageService,
    private countryService: CountryStateService,
    private fb:FormBuilder,
    ) {

     }

  ngOnInit() {
    this.cmpId = this.tokenService.getCompanyId();
    this.countries = this.countryService.getCountries();
    this.createForm();
    this.setCompanyInForm();
    if(this.data != null) {
      if(this.data.vendor != null) {
        this.title = "Edit";
        this.setFormValue(this.data.vendor);
        console.log("", this.data.vendor);
      }
    }
  }

  setCompanyInForm(){
    this.vendorForm.patchValue({
      companyId: this.cmpId
    });
  }

  createForm(){
    this.vendorForm = this.fb.group({
      id : [''],
      salutation: [''],
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      lastname: [''],
      contactno: [''],
      alternatecontact: [''],
      emailid: ['', [Validators.required, Validators.email]],
      faxno: [''],
      billstreetno: ['', Validators.required,],
      billstreetname: [''],
      billcity: ['', Validators.required,],
      billpostalcode:['',Validators.required,],
      billstate: ['', Validators.required,],
      billcountry: ['', Validators.required,],
      shipstreetno: [''],
      shipstreetname:[''],
      shipcity: [''],
      shippostalcode:[''],
      shipstate: [''],
      shipcountry: [''],
      companyId: ['']
    })
  }

  onSubmit() {
    this.vendor = this.vendorForm.value;
    console.log("vendor info", JSON.stringify(this.vendor));
    this.vendorService.saveVendor(this.vendor).subscribe(data => {
      if (data != null) {
        this.dialogRef.close(true);
      } else {
        this.dialogRef.close(false);
      }
    }, error => {
      this.dialogRef.close(false);
    })
  }

  onSelect(country:string){
    this.states = this.countryService.getStates().filter((item) => item.country == country);
  }

  onSelectShipCountry(country:string){
    this.shipstates =this.countryService.getStates().filter((item) => item.country == country);
  }

  copyBillingAddress() {
    const formModel = this.vendorForm.value;
    this.vendorForm.patchValue({
      shipstreetno: formModel.billstreetno,
      shipstreetname: formModel.billstreetname,
      shipcity: formModel.billcity as string,
      shippostalcode: formModel.billpostalcode as string,
      shipstate: formModel.billstate as string,
      shipcountry: formModel.billcountry as string,
    });
    this.onSelectShipCountry(formModel.billcountry);
  }

  copyShippingAddress() {
    const formModel = this.vendorForm.value;
    this.vendorForm.patchValue({
      billstreetno: formModel.shipstreetno as string,
      billstreetname: formModel.shipstreetname as string,
      billcity: formModel.shipcity as string,
      billpostalcode: formModel.shippostalcode as string,
      billstate: formModel.shipstate as string,
      billcountry: formModel.shipcountry as string,
    });
    this.onSelect(formModel.shipcountry);
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  setFormValue(vendor:Vendor){
    this.vendorForm.patchValue({
      id : vendor.id,
      salutation: vendor.salutation,
      firstname: vendor.firstname,
      lastname: vendor.lastname,
      contactno: vendor.contactno,
      alternatecontact: vendor.alternatecontact,
      emailid: vendor.emailid,
      faxno:vendor.faxno,
      billstreetno: vendor.billstreetno,
      billstreetname: vendor.billstreetname,
      billcity: vendor.billcity,
      billpostalcode:vendor.billpostalcode,
      billstate: vendor.billstate,
      billcountry: vendor.billcountry,
      shipstreetno: vendor.shipstreetno,
      shipstreetname:vendor.shipstreetname,
      shipcity: vendor.shipcity,
      shippostalcode: vendor.shippostalcode,
      shipstate: vendor.shipstate,
      shipcountry: vendor.shipcountry,
      companyId: vendor.companyId
    });
    this.onSelect(vendor.billcountry);
    this.onSelectShipCountry(vendor.shipcountry);
  }

}
