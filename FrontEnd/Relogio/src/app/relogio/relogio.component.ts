import { Component, OnInit } from '@angular/core';
import { ServiceSignalRService } from '../service-signal-r.service';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.css']
})
export class RelogioComponent implements OnInit {

  constructor(private serviceSignal: ServiceSignalRService) { }

  ngOnInit() {
  }

}
