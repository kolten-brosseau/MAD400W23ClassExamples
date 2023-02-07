import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { TemplateReferenceVarExampleComponent } from './template-reference-var-example/template-reference-var-example.component';
import { TwoWayBindingExampleComponent } from './two-way-binding-example/two-way-binding-example.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    TemplateReferenceVarExampleComponent,
    TwoWayBindingExampleComponent,
    ContentDetailComponent,
    PageNotFoundComponent,
    TopNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
