import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { SontactusComponent } from './pages/sontactus/sontactus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { ProjectComponent } from './pages/project/project.component';
import { TeamComponent } from './pages/team/team.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonComponent } from './shared/button/button.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContributionComponent } from './pages/contribution/contribution.component';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    BlogsComponent,
    SontactusComponent,
    ContactusComponent,
    EventsComponent,
    HomeComponent,
    NewsComponent,
    ProjectComponent,
    TeamComponent,
    HeaderComponent,
    ButtonComponent,
    FooterComponent,
    GalleryComponent,
    ContributionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
