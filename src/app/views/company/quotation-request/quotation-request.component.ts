import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormArray } from '@angular/forms';
import { GenericTerm } from 'src/app/models/generic/generic-term';
import { ActivatedRoute,Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { SecurityuserService } from 'src/app/services/securityuser.service';
import { HttpErrorResponse } from '@angular/common/http';
import { QuotationRequest } from 'src/app/models/quotation-request';
import { Location } from '@angular/common';
import { ResidentuserService } from 'src/app/services/token-storage/residentuser.service';
import { emailValidator } from 'src/app/directives/email-validator.directive';
import { ToasterService } from 'src/app/services/toaster.service';


@Component({
  selector: 'app-quotation-request',
  templateUrl: './quotation-request.component.html',
  styleUrls: ['./quotation-request.component.css']
})
export class QuotationRequestComponent implements OnInit {
  values: any;
  converted = '';
  userForm: FormGroup;
  title: string = "Generate";
  sub: any;
  
  Submit: string = "Submit";
  
  form: FormGroup;
  maxDate = new Date();
 
  selectedFile: File = null;
  maxSize: number = 2097152;
  url = '';
  selectedFile2: File = null;
  maxSize2: number = 2097152;
  url2 = '';
  generic = new GenericTerm();
  isLoadingResults: boolean = false;
  id: number;
  isUpdate: boolean = false;
  isView: boolean = false;
  adddiscount :boolean = false;
  addTaxes = false;
  assetRates : any[] = [];
  discountList :any[] = [];

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToasterService,
   
  ) {
    this.form = this.fb.group({
      published: true,
      credentials: this.fb.array([]),
    });
    this.createForm();
  }


  ngOnInit() {
   
  }

  createForm() {
    this.userForm = this.fb.group({
      id: [''],
      assetsName: ['', [Validators.required]],
      AssetId: [''],
      PlanName:[''],
      planId: [''],
      quantity:[''],
      term:[''],
      credentials: this.fb.array([])
     
    });
  }

  chnageStatus() {
    this.isView = !this.isView;
    if (!this.isView) {
      this.title = "Update";
      const url = `/home/billing-details/edit;id=${this.id};view=false`;
      this.router.navigateByUrl(url);
    } else {
      this.title = "View";
    }
  }

  setFormValue(quotationrequest: QuotationRequest) {
    this.userForm.patchValue({
      id: quotationrequest.id as any,
      assetsName: quotationrequest.assetsName as string,
      AssetId: quotationrequest.AssetId as string,
      PlanName: quotationrequest.PlanName as string,
      planId: quotationrequest.planId as string,
      quantity: quotationrequest.quantity as number,
      term: quotationrequest.term as string,
     
    });
  }

  get assetsName() { return this.userForm.get('assetsName'); }
  get AssetId() { return this.userForm.get('AssetId'); }
  get quantity() { return this.userForm.get('quantity'); }
  get planName() { return this.userForm.get('planName'); }
  get planId() { return this.userForm.get('planId'); }
  get term() { return this.userForm.get('term'); }
 


 
  get credentials(): FormArray {
    return this.userForm.get('credentials') as FormArray;
  }

  addCreds() {
    this.credentials.push(this.createAsset());
  }

  removeCredentials(i: number) {
    const control = <FormArray>this.userForm.controls['credentials'];
    control.removeAt(i);
  }


  createAsset(): FormGroup {
    return this.fb.group({
      id: null,
      assetId: '',
      assetName:'',
      quantity: '',
      unitRate: '',
      planId: '',
      term: '',
     
    });
  }

  goBack() {
    const url = `/home/billing-details`;
    this.router.navigateByUrl(url);
  }

  onSelectAsset(ev:any){

  }

  onSelectPlan(ev:any){

  }

}