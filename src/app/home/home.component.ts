import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  NavbarPosition:number;
  Navbar:any;
  scrolingFunction = (window.onscroll = () => {
    // const navbarpostion = this.NavbarPostion.offsetTop;
    // console.log(navbarpostion);
    if (window.pageYOffset >= this.NavbarPosition) {
      this.Navbar.classList.add('show-navbar');
    } else {
      this.Navbar.classList.remove('show-navbar');
    }
  });

  ngOnInit(): void {
    // this.scrolingFunction();
    // console.log(document.getElementById('navbar').offsetTop);
    // const NavbarPostion 
    this.Navbar=document.getElementById('navbarsdsd');
    this.NavbarPosition= document.getElementById('navbar').offsetTop+0;
    console.log(this.Navbar);
    console.log(this.NavbarPosition);
    // const scrollingPosition = NavbarPostion.offsetTop;
    // console.log(scrollingPosition);
    // scrolingFunction();


  // (window.onscroll = () => {
  //   const navbarpostion =NavbarPostion.offsetTop;
  //   console.log(navbarpostion);
  //   if (window.pageYOffset <= navbarpostion) {
  //     NavbarPostion.classList.add('show-navbar');
  //   } else {
  //     NavbarPostion.classList.remove('show-navbar');
  //     // const navbarpostion=NavbarPostion.offsetTop;
  //   }
  // });

  }
}
