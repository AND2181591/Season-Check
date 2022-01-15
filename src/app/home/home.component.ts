import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  month = new Date().getMonth();
  season = '';

  constructor() { }

  ngOnInit(): void {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        this.season = this.getSeason(lat, this.month);
      }, 
      err => console.log(err)
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
}
