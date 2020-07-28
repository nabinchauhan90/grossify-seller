import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { validateVerticalPosition } from '@angular/cdk/overlay';
import { SignupService } from '../signup/signup.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit,AfterViewInit {
  constructor(private signupService:SignupService) {
    // this.initAutocomplete();
    // this.signupService.initAutocomplete();
    // this.Autocomplete();
  }
  ngAfterViewInit(): void {
    // this.Autocomplete();
    this.signupService.Autocomplete();
  }
  signupForm: FormGroup;
  storeRegisterForm: FormGroup;
  storedetailsForm:FormGroup;
  isOptional=false;
  // codeconfirmation:FormGroup;
  categories: any = [
    { name: 'Books', value: 'books' },
    { name: 'Music', value: 'music' },
    { name: 'Groceries', value: 'groceries' },
    { name: 'Electronics', value: 'electronics' },
    { name: 'Games', value: 'games' },
    { name: 'TV', value: 'tv' },
    { name: 'Laptops', value: 'laptops' },
  ];
  ngOnInit(): void {
    this.signupService.address.subscribe(console.log);
    this.signupService.postal_code.subscribe(console.log);
    this.signupForm = new FormGroup({
      'full-name': new FormGroup({
        'fname': new FormControl('', Validators.required),
        'lname': new FormControl('', Validators.required),
      }),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required]),
      'role': new FormControl('', Validators.required),
      'mobile': new FormControl('', Validators.required),
    });
    // this.initAutocomplete();
    this.storeRegisterForm = new FormGroup({
      category: new FormControl('', Validators.required),
      store_code: new FormControl('', Validators.required),
      store_name: new FormControl('', Validators.required),
    });
    // this.Autocomplete();
    // this.signupService.runthis();
    // this.signupService.Autocomplete();
    // this.signupService.Autocomplete(); 
  }
  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset();
  }
  onSubmitStore() {
    console.log(this.storeRegisterForm);
  }


  //  Autocomplete() {
  //   const options = {
  //     center: {
  //       lat: 28.3949,
  //       lng: 84.124,
  //     },
  //     zoom: 15,
  //   };
  //   // const myLatlng = new google.maps.LatLng(-34.397, 150.644);
  //   const map = new google.maps.Map(document.getElementById('map'), options);
  //   let marker4 = new google.maps.Marker({
  //     position: options.center,
  //     map: map,
  //     draggable: true,
  //   });
  //   // google.maps.event.addListener(marker4, 'dragend', (event) => {
  //   //   // console.log(event);
  //   //   console.log(event.latLng.lat());
  //   //   console.log(event.latLng.lng());
  //   // });
  //   // const input = document.getElementById('pac-input') as HTMLInputElement;
  //   // const searchBox = new google.maps.places.SearchBox(input);
  //   // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // Bias the SearchBox results towards current map's viewport.

  //   // map.addListener('bounds_changed', () => {
  //   //   searchBox.setBounds(map.getBounds());
  //   // });
  //   // let markers = []; // Listen for the event fired when the user selects a prediction and retrieve
  //   // // more details for that place.
  //   // searchBox.addListener('places_changed', () => {
  //   //   const places = searchBox.getPlaces();
  //   //   // const place1=(places[0]);
  //   //   console.log(places);
  //   //   marker4.setMap(null);

  //   //   if (places.length == 0) {
  //   //     return;
  //   //   } // Clear out the old markers.

  //   //   markers.forEach((marker) => {
  //   //     marker.setMap(null);
  //   //   });
  //   //   markers = []; // For each place, get the icon, name and location.
  //   //   const bounds = new google.maps.LatLngBounds();
  //   //   marker4 = new google.maps.Marker({
  //   //     position: places[0].geometry.location,
  //   //     map,
  //   //     title: places[0].name,
  //   //     draggable: true,
  //   //   });
  //   //   google.maps.event.addListener(marker4, 'dragend', function (event) {
  //   //     console.log(event.latLng.lat());
  //   //     console.log(event.latLng.lng());
  //   //     // getDetails(){
  //   //     // }
  //   //     console.log(event);
  //   //     //  console.log(event.getPlaces.name);
  //   //     places[0].name;
  //   //   });
  //   //   if (places[0].geometry.viewport) {
  //   //     // Only geocodes have viewport.
  //   //     bounds.union(places[0].geometry.viewport);
  //   //   } else {
  //   //     bounds.extend(places[0].geometry.location);
  //   //   }

  //   //   map.fitBounds(bounds);
  //   // });
  // };





  // initAutocomplete() {
  //   const optioins = {
  //     center: {
  //       lat: 28.3949,
  //       lng: 84.124,
  //     },
  //     zoom: 15,
  //   };
  //   // const myLatlng = new google.maps.LatLng(-34.397, 150.644);
  //   const map = new google.maps.Map(document.getElementById('map'), optioins);

  //   let marker4 = new google.maps.Marker({
  //     position: optioins.center,
  //     map: map,
  //     draggable: true,
  //   });
  //   google.maps.event.addListener(marker4, 'dragend', (event) => {
  //     // console.log(event);
  //     console.log(event.latLng.lat());
  //     console.log(event.latLng.lng());
  //   });
  //   const input = document.getElementById('pac-input') as HTMLInputElement;
  //   const searchBox = new google.maps.places.SearchBox(input);
  //   // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // Bias the SearchBox results towards current map's viewport.

  //   map.addListener('bounds_changed', () => {
  //     searchBox.setBounds(map.getBounds());
  //   });
  //   let markers = []; // Listen for the event fired when the user selects a prediction and retrieve
  //   // more details for that place.
  //   searchBox.addListener('places_changed', () => {
  //     const places = searchBox.getPlaces();
  //     // const place1=(places[0]);
  //     console.log(places);
  //     marker4.setMap(null);

  //     if (places.length == 0) {
  //       return;
  //     } // Clear out the old markers.

  //     markers.forEach((marker) => {
  //       marker.setMap(null);
  //     });
  //     markers = []; // For each place, get the icon, name and location.
  //     const bounds = new google.maps.LatLngBounds();
  //     marker4 = new google.maps.Marker({
  //       position: places[0].geometry.location,
  //       map,
  //       title: places[0].name,
  //       draggable: true,
  //     });
  //     google.maps.event.addListener(marker4, 'dragend', function (event) {
  //       console.log(event.latLng.lat());
  //       console.log(event.latLng.lng());
  //       // getDetails(){
  //       // }
  //       console.log(event);
  //       //  console.log(event.getPlaces.name);
  //       places[0].name;
  //     });

  //     if (places[0].geometry.viewport) {
  //       // Only geocodes have viewport.
  //       bounds.union(places[0].geometry.viewport);
  //     } else {
  //       bounds.extend(places[0].geometry.location);
  //     }
  //     map.fitBounds(bounds);
  //   });
  // }

}