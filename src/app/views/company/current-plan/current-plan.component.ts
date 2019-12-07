import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';

import { CurrentPlan } from 'src/app/models/current-plan';
import { Location } from '@angular/common';
import { CountryStateService } from 'src/app/services/country-state.service';
import { ActivatedRoute,Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { ToasterService } from 'src/app/services/toaster.service';
import { emailValidator } from 'src/app/directives/email-validator.directive';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-current-plan',
  templateUrl: './current-plan.component.html',
  styleUrls: ['./current-plan.component.css']
})
export class CurrentPlanComponent implements OnInit {
  planName: string="3 Months";
  assetName: string = "Gate station";
  quantity: number = 5;
  rate: number = 1000;
  term: string = "3 Months";
  total: number = 5000;
  netTotal: number = 5000;
  discount: number = 3;
  grandTotal: number = 4500;
 
 

  constructor(private fb: FormBuilder,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute,
    private toasterService: ToasterService,
    
  ) {}
 
  ngOnInit() {
  
  }

  
 

 
}