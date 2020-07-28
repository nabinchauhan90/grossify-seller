import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AgmCoreModule} from '@agm/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PagesComponent } from './pages/pages.component';
import { CommonModule } from '@angular/common';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    PagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // PagesModule
    // MatStepperModule,
    // MatFormFieldModule,
    // MatInputModule,
    // BrowserAnimationsModule,
    // ReactiveFormsModule,
    // MatButtonModule,
    // MatCardModule
    // AgmCoreModule.forRoot({
    //   // apiKey:'AIzaSyA6RYdTOg7WscKfHJKO8SevkVu-oRHZ6g4'
    //   // apiKey: 'AIzaSyCLuaAR0yVxmQcqPGh_vyeU6LsDD5UwtTI'
    //   apiKey:'AIzaSyASynNXpP9v040cNSh2f_A8XVnPkQ5mUEY'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
