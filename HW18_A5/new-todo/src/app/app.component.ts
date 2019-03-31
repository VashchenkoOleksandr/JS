import {Component, OnInit} from '@angular/core';

class Plan {
  id: number;
  info: string;
  status: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'My New ToDO';

  constructor() {
  }

  ngOnInit() {
  }
}
