import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteBtnComponent } from './favorite-btn/favorite-btn.component';
import { PopularTagsComponent } from './popular-tags/popular-tags.component';
import { TextDisplayPipe } from './text-display.pipe';
import { ArticleDetailComponent } from './article-detail/article-detail.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    AuthorComponent,
    TextDisplayPipe,
    FavoriteBtnComponent,
    PopularTagsComponent,
    ArticleDetailComponent,
    NotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
