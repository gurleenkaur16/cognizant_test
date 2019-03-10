import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesPipe } from './movies.pipe';
import {HttpClientModule} from '@angular/common/http';
import { TestgridComponent } from './testgrid/testgrid.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesPipe,
    TestgridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
