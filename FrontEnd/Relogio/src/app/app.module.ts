import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RelogioComponent } from './relogio/relogio.component';
import { ServiceSignalRService } from './service-signal-r.service';


@NgModule({
  declarations: [
    AppComponent,
    RelogioComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceSignalRService],
  bootstrap: [AppComponent]
})
export class AppModule { }
