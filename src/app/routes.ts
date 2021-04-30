import { Routes } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminLoginComponent } from "./admin-login/admin-login.component";
import { AdminProductEditComponent } from "./admin-product-edit/admin-product-edit.component";
import { AuthGuard } from "./auth.service";
import { CarouselComponent } from "./carousel/carousel.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { ListProductsComponent } from "./list-products/list-products.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";

export const appRoutes:Routes =
[
  {path:'home',component:HomeComponent},
  {path:'test',component:ProductDetailComponent},
  {path:'detail/:id',component:ProductDetailComponent},
  {path:'adminedit/:id',component:AdminProductEditComponent,canActivate:[AuthGuard]},
  {path:"admin",component:AdminLoginComponent},
  {path:"products",component:ListProductsComponent},
  {path:"contact",component:ContactComponent},
  {path:"dashboard",component:AdminDashboardComponent, canActivate:[AuthGuard]},
  {path:'',component:HomeComponent},
  {path:'**',component:NotfoundComponent}
];
