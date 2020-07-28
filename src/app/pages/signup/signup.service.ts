import { Injectable } from '@angular/core';
import { observable, Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  constructor() { 
  }

  address= new BehaviorSubject(null);
  postal_code=new BehaviorSubject(null);
  Autocomplete() {
    const optioins = {
      center: {
        lat: 28.3949,
        lng: 84.124,
      },
      zoom: 15,
      disableDoubleClickZoom: true,
      scrollwheel: false,
    };
    const map = new google.maps.Map(document.getElementById('map'), optioins);
   
    // i've commenter all these at once

    let marker4 = new google.maps.Marker({
      position: optioins.center,
      map: map,
      draggable: true,

    });
    google.maps.event.addListener(map,'dblclick',(event)=>{
      console.log(event);
      optioins.center.lat=event.latLng.lat();
      optioins.center.lng=event.latLng.lng();
      marker4.setPosition(event.latLng);
      console.log(event.latLng.lat());
      console.log(event.latLng.lng());
      // marker4.setMap(map);
    })
    
    google.maps.event.addListener(marker4, 'dragend', (event) => {
      // console.log(event);
      console.log(event.latLng.lat());
      console.log(event.latLng.lng());
      
    });
    const input = document.getElementById('pac-input') as HTMLInputElement;
    const searchBox = new google.maps.places.SearchBox(input);
    // map.controls[google.maps.ControlPosition.TOP_LEFT].push(input); // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', () => {
      searchBox.setBounds(map.getBounds());
    });
    let markers = []; // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    // searchBox.addListener('places_changed', () => {
      searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      
      // const place1=(places[0]);
      console.log(places);
      console.log(places[0].formatted_address);
      this.address.next(places[0].formatted_address);
      this.postal_code.next(+places[0].address_components[4].long_name);
      marker4.setMap(null);

      if (places.length == 0) {
        return;
      } // Clear out the old markers.

      markers.forEach((marker) => {
        marker.setMap(null);
      });
      markers = []; // For each place, get the icon, name and location.
      const bounds = new google.maps.LatLngBounds();
      marker4 = new google.maps.Marker({
        position: places[0].geometry.location,
        map,
        title: places[0].name,
        draggable: true,
      });
      // google.maps.event.addListener(marker4, 'dragend', function (event) {
      //   console.log(event.latLng.lat());
      //   console.log(event.latLng.lng());
      //   // getDetails(){
      //   // }
      //   // console.log(event);
      //   // console.log(event.formatted_address);
      //   //  console.log(event.getPlaces.name);
      //   console.log( places[0].name);
      // });

      if (places[0].geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(places[0].geometry.viewport);
      } else {
        bounds.extend(places[0].geometry.location);
      }
      map.fitBounds(bounds);
    });
  }
  //map Functionality
  
}
