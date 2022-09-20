import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YComponent } from './y/y.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServiceComponent } from './service/service.component';
import { BlogComponent } from './blog/blog.component';
import { SchoolComponent } from './school/school.component';

@NgModule({
  declarations: [
    AppComponent,
    YComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    ContactComponent,
    PortfolioComponent,
    ServiceComponent,
    BlogComponent,
    SchoolComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
