import { Injectable, EventEmitter } from '@angular/core';
import { HoraAtual } from './modelo/HoraAtual';
import { CONFIG } from './generic/app.constantes';
import { HubConnection } from '@aspnet/signalr-client';

@Injectable()
export class ServiceSignalRService {
  private _hubConnection: HubConnection;
  public messageReceived: EventEmitter < HoraAtual > ;
  public connectionEstablished: EventEmitter < Boolean > ;

  constructor() {
    this._hubConnection = new HubConnection(CONFIG.baseUrls.server);
    this._hubConnection
      .start()
      .then(() => this.solicitarHora()  )
      .catch(err => console.log('Error while establishing connection :('));

    this._hubConnection.on('setHoraAtualNaTela', (data: HoraAtual) => {
      console.log('received in SignalRService: ' + JSON.stringify(data));
      this.messageReceived.emit(data);
    });
  }

  public solicitarHora() {
      this._hubConnection.invoke('GetHora').catch(err => console.error(err));
  }

}
