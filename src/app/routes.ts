import { Routes } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AuthGuard } from "./auth.service";
import { HomeComponent } from "./home/home.component";

export const appRoutes:Routes =
[
  {path:'',component:HomeComponent},
  {path:"admin",component:AdminLoginComponent},
  {path:"dashboard",component:AdminDashboardComponent, canActivate:[AuthGuard]}
];
