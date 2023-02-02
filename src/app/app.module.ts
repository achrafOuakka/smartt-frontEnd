import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/base/header/header.component';
import { LayoutComponent } from './components/base/layout/layout.component';
import { FooterComponent } from './components/base/footer/footer.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { AboutComponent } from './components/main/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ServicesComponent } from './components/main/services/services.component';
import { ContactComponent } from './components/main/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollComponent } from './components/base/scroll/scroll.component';
import { FeaturesComponent } from './components/main/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    LoginComponent,
    ScrollComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//pour ngForms
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
