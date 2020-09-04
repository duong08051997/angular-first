import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ColorComponent } from './color/color.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    PetComponent,
    FontSizeComponent,
    CalculatorComponent,
    ColorComponent,
    UserListComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
