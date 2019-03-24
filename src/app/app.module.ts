import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgDatepickerModule } from 'ng2-datepicker';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeNavigationComponent } from './home-navigation/home-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HomeNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
