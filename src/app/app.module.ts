import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DataComponent } from './data/data.component';
import { AuthGuard } from './admin-login/auth.guard';
import { UserService } from './admin-login/user.service';


const appRoutes: Routes=[
{path:'',component:HomeComponent},
{path:'enquiry',component:EnquiryComponent},
{path:'service',component:ServiceComponent},
{path:'about',component:AboutComponent},
{path:'contact',component:ContactComponent},
{path:'admin-login',component:AdminLoginComponent},
{path:'data',canActivate:[AuthGuard], component:DataComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    EnquiryComponent,
    AdminLoginComponent,
    DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard,UserService,AdminLoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
