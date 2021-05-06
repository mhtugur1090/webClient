import { Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductAddComponent } from './admin-product-add/admin-product-add.component';
import { AdminProductEditComponent } from './admin-product-edit/admin-product-edit.component';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';
import { AuthGuard } from './auth.service';
import { CarouselComponent } from './carousel/carousel.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardContactComponent } from './dashboard-contact/dashboard-contact.component';
import { DashboardInfoComponent } from './dashboard-info/dashboard-info.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'test', component: ProductDetailComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  {
    path: 'adminedit/:id',
    component: AdminProductEditComponent,
    canActivate: [AuthGuard],
  },
  { path: 'admin', component: AdminLoginComponent },
  { path: 'products', component: ListProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path:'admin-product-add',component:AdminProductAddComponent,canActivate:[AuthGuard]
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard-product',
        component: DashboardProductComponent,
        outlet: 'dashboard',
        canActivate: [AuthGuard],
      },
      {
        path: 'dashboard-info',
        component: DashboardInfoComponent,
        outlet: 'dashboard',
        canActivate: [AuthGuard],
      },
      {
        path:'dashboard-admin-settings',
        component:AdminSettingsComponent,
        outlet:'dashboard',
        canActivate:[AuthGuard]
      },
      {
        path: 'dashboard-contact',
        component: DashboardContactComponent,
        outlet: 'dashboard',
        canActivate: [AuthGuard],
      },
      {
        path: '',
        component: DashboardProductComponent,
        outlet: 'dashboard',
        canActivate: [AuthGuard],
      },
    ],
  },

  { path: '', component: HomeComponent },
  { path: '**', component: NotfoundComponent },
];
