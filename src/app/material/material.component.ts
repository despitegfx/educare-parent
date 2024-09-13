import { Component, OnInit } from '@angular/core';
import { ApiService } from '../utils/api.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit{

  materialData: any[] = []

  constructor(private apiService: ApiService){ }

  ngOnInit(): void { 
    let studentId = localStorage.getItem("studentId")
    this.apiService.getRequest(`material.php?id=${studentId}`)
    .subscribe(data => {
      this.materialData = data;      
    })
  }



}
