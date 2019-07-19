import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TripsListComponent } from './components/trips-list/trips-list.component';
import { HttpClientModule} from '@angular/common/http';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TripsDetailsComponent } from './component/trips-details/trips-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TripsListComponent,
    WelcomeComponent,
    NotfoundComponent,
    TripsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
