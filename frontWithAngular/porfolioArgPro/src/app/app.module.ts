import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { StackComponent } from './components/stack/stack.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http'
import { RouterModule} from '@angular/router';
import { ScrollAnchorDirective } from './directives/scroll-anchor.directive';
import { ScrollSectionDirective } from './directives//scroll-section.directive';
import { ScrollManagerDirective } from './directives/scroll-manager.directive';
import { FormsModule } from '@angular/forms';
import { EducationComponent } from './components/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    AboutmeComponent,
    StackComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    ScrollAnchorDirective,
    ScrollManagerDirective,
    ScrollSectionDirective,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
