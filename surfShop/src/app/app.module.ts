import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRotas } from './app-rotas';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SurfBoardsComponent } from './components/surf-boards/surf-boards.component';
import { WetsuitsComponent } from './components/wetsuits/wetsuits.component';
import { SigningComponent } from './components/registro/signing/signing.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SurfBoardsComponent,
    WetsuitsComponent,
    SigningComponent
  ],
  imports: [
    BrowserModule,
    AppRotas,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
