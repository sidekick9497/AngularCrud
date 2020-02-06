import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {DisplayMediaComponent} from './display-media/display-media.component';
import {InputMediaComponent} from './input-media/input-media.component';
import { BaseComponent } from './base/base.component';
import {SendComponent} from './send/send.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { UpdateMediaComponent } from './update-media/update-media.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayMediaComponent,
    InputMediaComponent,
    BaseComponent,
    SendComponent,
    UpdateMediaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],

  providers: [],
  entryComponents: [UpdateMediaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
