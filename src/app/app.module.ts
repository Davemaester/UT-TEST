import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { ContentService } from './content/content.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LoadingService } from './service/loading.service';

@NgModule({
  declarations: [AppComponent, ContentComponent],
  imports: [BrowserModule, ReactiveFormsModule, CommonModule, HttpClientModule],
  providers: [ContentService, LoadingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
