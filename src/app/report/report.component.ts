import { Component, inject, OnInit } from '@angular/core';
import { ApiService, Report } from '../utils/api.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  private _bottomSheet = inject(MatBottomSheet);
  reportData: any[] = []

  constructor(private apiService: ApiService){ }

  ngOnInit(): void { 
    let studentId = localStorage.getItem("studentId")
    this.apiService.getRequest(`report.php?id=${studentId}`)
    .subscribe(data => {
      this.reportData = data.response; 
      console.log(data);
      
    })
  }

  openBottomSheet(report: any): void {
    this.apiService.setData(report)
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  closeSheet(){
this._bottomSheet.dismiss()
  }
}


@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./bottom-sheet-overview-example-sheet.css'],
})
export class BottomSheetOverviewExampleSheet implements OnInit{
  private _bottomSheetRef = inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);

  reportDetail: any
  constructor(private apiService: ApiService){ }


  ngOnInit(): void {
    this.reportDetail = this.apiService.data
  }

  closeSheet(): void {
    this._bottomSheetRef.dismiss();
  }
}
