import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './core/services/services.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
  ],
  providers: [
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'USD' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
