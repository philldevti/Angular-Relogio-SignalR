import { Component, NgZone } from '@angular/core';
import { ServiceSignalRService } from '../service-signal-r.service';
import { HoraAtual } from '../modelo/HoraAtual';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.css']
})
export class RelogioComponent {
  public currentMessage: HoraAtual;
  public dataHoraMsg: HoraAtual;
  public canSendMessage: Boolean;
  constructor(private signalService: ServiceSignalRService,
              private _ngZone: NgZone) {

    this.subscribeToEvents();

    setInterval(() => {
        this.signalService.solicitarHora();
    }, 1000);
  }

  private subscribeToEvents(): void {

    this.signalService.connectionEstablished.subscribe(() => {
        this.canSendMessage = true;
    });

    this.signalService.messageReceived.subscribe((message: HoraAtual) => {
        this._ngZone.run(() => {
            this.dataHoraMsg = message;
        });
    });
  }

}
