import { Component, OnInit } from '@angular/core';
import { DashboardCounter } from 'src/app/models/dashboard-counter';
import { ThemeService } from 'src/app/services/theme.service';
import { MatDialog } from '@angular/material';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-app-blank',
  templateUrl: './app-blank.component.html',
  styleUrls: ['./app-blank.component.css']
})
export class AppBlankComponent implements OnInit {

  counterDto: any;
  constructor(private themeService: ThemeService, 
    public dialog: MatDialog, 
    private dashboardService: DashboardService) { 
  }

  ngOnInit() {
    this.counters();
  }

  counters(){
    this.dashboardService.getCounters().subscribe(data => {
      this.counterDto = data;
    }, err=>{

    });
  }

}

