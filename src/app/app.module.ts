import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudtodoComponent } from './crudtodo/crudtodo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WearecloseComponent } from './myglam/weareclose/weareclose.component';
import { SubscribeComponent } from './myglam/subscribe/subscribe.component';
import { HowitworkComponent } from './myglam/howitwork/howitwork.component';
import { HeaderComponent } from './myglam/header/header.component';
import { ExploreComponent } from './myglam/explore/explore.component';
import { CapitalComponent } from './myglam/capital/capital.component';
import { FormsModule } from '@angular/forms';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { MyglamComponent } from './myglam/myglam.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import{AddComponent} from './crudtodo/add/add.component';
import{GetComponent} from './crudtodo/get/get.component';
import{UpdateComponent} from './crudtodo/update/update.component';
import { HttpClientModule } from '@angular/common/http';


import { from } from 'rxjs';
import { ConfigService } from './config.service';
@NgModule({
  declarations: [
    AppComponent,
    CrudtodoComponent,
    NavbarComponent,
    WearecloseComponent,
    SubscribeComponent,
    HowitworkComponent,
    HeaderComponent,
    MyglamComponent,
    ExploreComponent,
    CapitalComponent,
    CalculatriceComponent,
    AddComponent,
    GetComponent,
    UpdateComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SlimLoadingBarModule,
    HttpClientModule,
    
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
