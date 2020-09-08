import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorComponent } from './color/color.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { SearchComponent } from './search/search.component';
import { MessageComponent } from './message/message.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    FontSizeComponent,
    CalculatorComponent,
    ColorComponent,
    UserListComponent,
    SearchComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
