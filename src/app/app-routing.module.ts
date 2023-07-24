import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { EventsComponent } from './pages/events/events.component';
import { NewsComponent } from './pages/news/news.component';
import { ProjectComponent } from './pages/project/project.component';
import { TeamComponent } from './pages/team/team.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContributionComponent } from './pages/contribution/contribution.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'events', component: EventsComponent },
  { path: 'news', component: NewsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'team', component: TeamComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contribution', component: ContributionComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
