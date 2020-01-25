import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsWallComponent } from './components/news-wall/news-wall.component';
import { OwnStatsComponent } from './components/own-stats/own-stats.component';
import { RouteNotFoundComponent } from './components/route-not-found/route-not-found.component';


const routes: Routes = [
  { path: '', component: NewsWallComponent },
  { path: 'stats', component: OwnStatsComponent },
  { path: '**', component: RouteNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
