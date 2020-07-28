import { Component } from '@angular/core';
import { SignupService } from './pages/signup/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'seller-grossify';
  constructor(private mapservice:SignupService){
    // this.mapservice.Autocomplete();
  }
}
