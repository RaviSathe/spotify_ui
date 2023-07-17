import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SearchComponent } from './pages/search/search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { SongCardComponent } from './components/song-card/song-card.component';
import { RegistrationComponent } from './practice/registration/registration.component';
import { LoginComponent } from './practice/login/login.component';
import { Home1Component } from './practice/home1/home1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidebarComponent } from './practice/sidebar/sidebar.component';
import { DashBoardComponent } from './practice/dash-board/dash-board.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlaylistComponent,
    SearchComponent,
    SignupComponent,
    ButtonsComponent,
    TopNavComponent,
    SongCardComponent,
    RegistrationComponent,
    LoginComponent,
    Home1Component,
    SidebarComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
