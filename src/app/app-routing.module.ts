import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { FeesComponent } from './fees/fees.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { MaterialComponent } from './material/material.component';
import { AuthGuardService } from './utils/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", redirectTo: 'home', pathMatch: "full" },
  {path: "report", component: ReportComponent, canActivate: [AuthGuardService]},
  {path: "fees", component: FeesComponent, canActivate: [AuthGuardService]},
  {path: "attendance", component: AttendanceComponent, canActivate: [AuthGuardService]},
  {path: "material", component: MaterialComponent, canActivate: [AuthGuardService]},
  {path: "home", component: DashboardComponent, canActivate: [AuthGuardService]},
  {path: "login", component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
