import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxEditorModule} from 'ngx-editor'
import { AppComponent } from './app.component';
//import { PushNotificationsModule } from 'angular2-notifications';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    AngularFontAwesomeModule
    //PushNotificationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
