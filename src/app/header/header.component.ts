import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string =  ""
  item: any;
  chatUrl: any = ""

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.item = localStorage.getItem("id")
    this.userName = JSON.parse(this.item)[0].firstname
    localStorage.setItem("studentId", JSON.parse(this.item)[0].id)

    this.chatUrl = localStorage.getItem("student")
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login']);
  }



}
