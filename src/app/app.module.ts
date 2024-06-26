import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';

import { ReeFeaturedComponent } from './components/ree-featured/ree-featured.component';
import { ReeTotyComponent } from './components/ree-toty/ree-toty.component';
import { ReeBlogComponent } from './components/ree-blog/ree-blog.component';
import { ReeSearchComponent } from './components/ree-search/ree-search.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ReeSongDetailComponent } from './components/ree-song-detail/ree-song-detail.component';
import { ReeHomeComponent } from './components/ree-home/ree-home.component';
import { ReeArticleComponent } from './components/ree-article/ree-article.component';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReeFeaturedComponent,
    ReeTotyComponent,
    ReeBlogComponent,
    ReeSearchComponent,
    LoadingComponent,
    ReeSongDetailComponent,
    ReeHomeComponent,
    ReeArticleComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
