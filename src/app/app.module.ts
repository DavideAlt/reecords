import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReeFeaturedComponent } from './components/ree-featured/ree-featured.component';
import { ReeTotyComponent } from './components/ree-toty/ree-toty.component';
import { ReeBlogComponent } from './components/ree-blog/ree-blog.component';
import { ReeSearchComponent } from './components/ree-search/ree-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ReeFeaturedComponent,
    ReeTotyComponent,
    ReeBlogComponent,
    ReeSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }