import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// custom directive imported from the respective file
import { ChangecolorDirective } from './changecolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangecolorDirective // custom directive declared as part of module
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
