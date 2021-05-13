import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './auth.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { ContactComponent } from './contact/contact.component';
import { AdminPImageEditComponent } from './admin-p-image-edit/admin-p-image-edit.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { DashboardInfoComponent } from './dashboard-info/dashboard-info.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashboardContactComponent } from './dashboard-contact/dashboard-contact.component';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      AdminLoginComponent,
      HomeComponent,
      AdminDashboardComponent,
      NotfoundComponent,
      ListProductsComponent,
      ProductDetailComponent,
      CarouselComponent,
      AdminProductEditComponent,
      ContactComponent,
      AdminPImageEditComponent,
      DashboardProductComponent,
      DashboardInfoComponent,
      AboutusComponent,
      DashboardContactComponent,
      LoadingpageComponent,
      AdminProductAddComponent,
      AdminSettingsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{useHash:true}),// bu parametre manuel olarak link girdiğimizde 404 hatası vermemesi için.
    /*JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:5000"], // token gönderilecek adres
        disallowedRoutes: ["localhost:5000/auth"],//token gönderilmeyecek adres
      },
    }),*/
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
