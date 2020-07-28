import { Component, OnInit, Input } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  // constructor(private _formBuilder: FormBuilder) {}
  formsubmitted: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  ngOnInit(): void {
    // this.stupid;
    // this.stupid();

    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ['', Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ['', Validators.required]
    // });
    
  }

  onSubmit(form: NgForm) {
    console.log(form);
    form.reset();
    this.formsubmitted = true;
  }



  //thses all are map functionality.
  // stupid = function initAutocomplete() {
  //   const optioins = {
  //     center: {
  //       lat: 28.3949,
  //       lng: 84.124,
  //     },
  //     zoom: 15,
  //   };
  //   // const myLatlng = new google.maps.LatLng(-34.397, 150.644);
  //   const map = new google.maps.Map(document.getElementById('map'), optioins);

  //   const marker4 = new google.maps.Marker({
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
  //     this.marker4 = new google.maps.Marker({
  //       position: places[0].geometry.location,
  //       map,
  //       title: places[0].name,
  //       draggable: true,
  //     });
  //     google.maps.event.addListener(this.marker4, 'dragend', function (event) {
  //       console.log(event.latLng.lat());
  //       console.log(event.latLng.lng());
  //       // getDetails(){
  //       // }
  //       console.log(event);
  //     //  console.log(event.getPlaces.name);
  //       places[0].name;
  //     });

  //     if (places[0].geometry.viewport) {
  //       // Only geocodes have viewport.
  //       bounds.union(places[0].geometry.viewport);
  //     } else {
  //       bounds.extend(places[0].geometry.location);
  //     }

  //     map.fitBounds(bounds);
  //     //This one for showing all the results like all no of restautants in that place. i'm just takin first value
      
      
  //     // places.forEach((place) => {
  //     //   // places[0].(place)=>{
  //     //   if (!place.geometry) {
  //     //     console.log('Returned place contains no geometry');
  //     //     return;
  //     //   }
  //     //   this.marker4 = new google.maps.Marker({
  //     //     position: place.geometry.location,
  //     //     map,
  //     //     title: place.name,
  //     //     draggable: true,
  //     //   });
  //     //   google.maps.event.addListener(marker4, 'dragend', function (event) {
  //     //     // document.getElementById("latbox").value = this.getPosition().lat();
  //     //     // document.getElementById("lngbox").value = this.getPosition().lng();
  //     //     // console.log(event.latLng());
  //     //     // console.log(this.gerPosition().lng());
  //     //     console.log(event.latLng.lat());
  //     //     // console.log(event.getPosition().lat());
  //     //     // console.log(event.getPosition().lng());
  //     //   });
  //     //   // const icon = {
  //     //   //   url: place.icon,
  //     //   //   size: new google.maps.Size(71, 71),
  //     //   //   origin: new google.maps.Point(0, 0),
  //     //   //   anchor: new google.maps.Point(17, 34),
  //     //   //   scaledSize: new google.maps.Size(25, 25),
  //     //   // }; // Create a marker for each place.

  //     //   // markers.push(new google.maps.Marker({
  //     //   //     map,
  //     //   //     icon,
  //     //   //     title: place.name,
  //     //   //     position: place.geometry.location,
  //     //   //     draggable:true,
  //     //   //   })
  //     //   //   // new google.maps.Marker({
  //     //   //   //   //   map,
  //     //   //   //   //   icon,
  //     //   //   //   //   title: place.name,
  //     //   //   //   //   position: place.geometry.location,
  //     //   //   //   //   draggable:true
  //     //   //   //   //
  //     //   //   //   position: place.geometry.location,
  //     //   //   //   map: map,
  //     //   //   //   // icon,
  //     //   //   //   draggable: true,
  //     //   //   //   title: place.name,
  //     //   //   // })
  //     //   // );

  //     //   // markers.forEach(element => {

  //     //   // });

  //     //   // this.marker4 = new google.maps.Marker({
  //     //   //   position: place.geometry.location,
  //     //   //   map: map,
  //     //   //   // icon,
  //     //   //   draggable: true,
  //     //   //   title: place.name,
  //     //   // });

  //     //   // console.log(this.marker[0].getPosition().lat());
  //     //   if (place.geometry.viewport) {
  //     //     // Only geocodes have viewport.
  //     //     bounds.union(place.geometry.viewport);
  //     //   } else {
  //     //     bounds.extend(place.geometry.location);
  //     //   }
  //     // });
  //   });
  // };
}
