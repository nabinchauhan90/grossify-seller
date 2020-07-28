import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
 
  {path:'',component:HomeComponent},
  {path:'signup',loadChildren:()=>import('../app/pages/pages.module').then(m=>m.PagesModule)},
  {path:'home',redirectTo:'',pathMatch:'full'},
   // {path:'',component:AppComponent},
  // {path:'',loadChildren:()=>import('../app/pages/pages.module').then(m=>m.PagesModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
