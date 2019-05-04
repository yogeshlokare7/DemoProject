import { Component, OnInit, Inject } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CountryStateService } from 'src/app/services/country-state.service';
import { State } from 'src/app/models/state';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerForm: FormGroup;
  customer : Customer;
  countries: string[];
  states: State[];
  shipstates:State[];
  title: string = "Add";
  options: string[] =  ['Mr.', 'Mrs.', 'Ms', 'Miss', 'Dr.']
  cmpId: number;
  constructor(
    public dialogRef: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private customerService:CustomerService,
    private tokenService: TokenStorageService,
    private countryService: CountryStateService,
    private fb:FormBuilder,
    ) { }

  ngOnInit() {
    this.cmpId = this.tokenService.getCompanyId();
    this.countries = this.countryService.getCountries();
    this.createForm();
    this.setCompanyInForm();
    if(this.data != null){
      if(this.data.customer != null){
        this.title = "Edit";
        this.setFormValue(this.data.customer);
      }
    }
  }

  setCompanyInForm(){
    this.customerForm.patchValue({
      companyId: this.cmpId
    });
  }

  createForm(){
    this.customerForm = this.fb.group({
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
    this.customer = this.customerForm.value;
    console.log("customer info", JSON.stringify(this.customer));
    this.customerService.saveCustomer(this.customer).subscribe(data => {
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
    const formModel = this.customerForm.value;
    this.customerForm.patchValue({
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
    const formModel = this.customerForm.value;
    this.customerForm.patchValue({
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

  setFormValue(customer:Customer){
    this.customerForm.patchValue({
      id : customer.id,
      salutation: customer.salutation,
      firstname: customer.firstname,
      lastname: customer.lastname,
      contactno: customer.contactno,
      alternatecontact: customer.alternatecontact,
      emailid: customer.emailid,
      faxno:customer.faxno,
      billstreetno: customer.billstreetno,
      billstreetname: customer.billstreetname,
      billcity: customer.billcity,
      billpostalcode:customer.billpostalcode,
      billstate: customer.billstate,
      billcountry: customer.billcountry,
      shipstreetno: customer.shipstreetno,
      shipstreetname:customer.shipstreetname,
      shipcity: customer.shipcity,
      shippostalcode: customer.shippostalcode,
      shipstate: customer.shipstate,
      shipcountry: customer.shipcountry,
      companyId: customer.companyId
    });
    this.onSelect(customer.billcountry);
    this.onSelectShipCountry(customer.shipcountry);
  }

}
