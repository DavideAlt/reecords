import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallbackComponent } from './auth/callback.component';
import { AppComponent } from './app.component';
import { ReeSongDetailComponent } from './components/ree-song-detail/ree-song-detail.component';
import { ReeHomeComponent } from './components/ree-home/ree-home.component';
import { ReeArticleComponent } from './components/ree-article/ree-article.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: ReeHomeComponent},
  { path: 'track/:trackId', component: ReeSongDetailComponent},
  { path: 'article/:articleId', component: ReeArticleComponent},
  { path: 'callback', component: CallbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
