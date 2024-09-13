import { Component, inject, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { ApiService } from '../utils/api.service';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.css'],
})
export class FeesComponent implements OnInit{
  private _bottomSheet = inject(MatBottomSheet);

  FeeData: any[] = []

  constructor(private apiService: ApiService){ }

  ngOnInit(): void { 
    let studentId = localStorage.getItem("studentId")
    this.apiService.getRequest(`report.php?id=${studentId}`)
    .subscribe(data => {
      this.FeeData = data;
      console.log(data);
       
    })
  }

  openBottomSheet(): void {
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
export class BottomSheetOverviewExampleSheet {
  private _bottomSheetRef = inject<MatBottomSheetRef<BottomSheetOverviewExampleSheet>>(MatBottomSheetRef);

  closeSheet(): void {
    this._bottomSheetRef.dismiss();
  }
}