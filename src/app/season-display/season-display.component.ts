import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-season-display',
  templateUrl: './season-display.component.html',
  styleUrls: ['./season-display.component.css']
})
export class SeasonDisplayComponent implements OnInit {
  @Input() season: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
