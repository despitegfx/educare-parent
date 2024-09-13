import { Component, OnInit } from '@angular/core';
import { ApiService } from '../utils/api.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit{

  profileData: any[] = []

  constructor(private apiService: ApiService){ }

  ngOnInit(): void { 
    let studentId = localStorage.getItem("studentId")
    this.apiService.getRequest(`loginregisterchild.php?id=${studentId}`)
    .subscribe(data => {
      this.profileData = data; 
    })
  }
}
