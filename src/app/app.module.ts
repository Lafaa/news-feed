import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsWallComponent } from './components/news-wall/news-wall.component';
import { OwnStatsComponent } from './components/own-stats/own-stats.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';
import { PostComponent } from './components/shared-components/post/post.component';
import { CommentComponent } from './components/shared-components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsWallComponent,
    OwnStatsComponent,
    RouteNotFoundComponent,
    PostComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
