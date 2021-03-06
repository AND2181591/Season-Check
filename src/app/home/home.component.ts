import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  month = new Date().getMonth();
  lat: number = 0;
  season = '';
  error = false;

  constructor() { }

  ngOnInit(): void {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords);
        this.lat = position.coords.latitude;
        this.season = this.getSeason(this.lat, this.month);
      }, 
      err => this.error = true
    );
  }

  getSeason(lat: number, month: number): string {
    if (month === 11 || month < 2) {
      return lat > 0 ? 'winter' : 'summer';
    } else if (month > 1 && month < 5) {
      return lat > 0 ? 'spring' : 'autumn';
    } else if (month > 4 && month < 8) {
      return lat > 0 ? 'summer' : 'winter';
    } else {
      return lat > 0 ? 'autumn' : 'spring'
    }
  }

  updateLocation(): void {
    if (Math.sign(this.lat) === 1) {
      this.lat = -Math.abs(this.lat);
      this.season = this.getSeason(this.lat, this.month);
    } else if (Math.sign(this.lat) === -1) {
      this.lat = Math.abs(this.lat);
      this.season = this.getSeason(this.lat, this.month);
    }
  }
}


// https://www.timeanddate.com/calendar/aboutseasons.html