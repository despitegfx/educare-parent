import { Component } from '@angular/core';
import { ApiService } from '../utils/api.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = ""
  password: string = ""
  txt: string = ""

 constructor(private apiService: ApiService, private router: Router){
 }

  onLogin(){
    if(this.email == "" || this.password == ""){
      this.txt = "All fields are required!"
    }else{
      this.txt = ""
      this.apiService.getRequest(`loginregisterlogin.php?email=${this.email}&password=${this.password}`)
      .subscribe(data => {
        if(data[0].code == "login_success"){
        localStorage.setItem("id", JSON.stringify(data))
          this.router.navigate(['home'])
      }
      })
    }
  }

  checkField(): boolean{
    if(this.email == "" || this.password == ""){
      return true
    }else{ return false }
   
  }

}
