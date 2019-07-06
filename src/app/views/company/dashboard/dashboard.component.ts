import { Component, OnInit } from '@angular/core';
import { DashboardCounter } from 'src/app/models/dashboard-counter';
import { ThemeService } from 'src/app/services/theme.service';
import { MatDialog } from '@angular/material';
import { DashboardService } from 'src/app/services/dashboard.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { Society } from 'src/app/models/society';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  counterDto: any;
  society = new Society();
  constructor(private themeService: ThemeService, 
    public dialog: MatDialog, 
    public tokenService:TokenStorageService,
    private dashboardService: DashboardService) { 
  }

  ngOnInit() {
    this.society = this.tokenService.getSociety();
    if(this.society !=null){
      this.counters(this.society.id);
    }
  }

  counters(id:number){
    this.dashboardService.getCounters(id).subscribe(data => {
      this.counterDto = data;
    }, err=>{

    })
  }

}
