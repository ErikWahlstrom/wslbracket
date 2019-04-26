import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BracketvisualizerComponent } from './bracketvisualizer/bracketvisualizer.component';
import { SurferComponent } from './surfer/surfer.component';

@NgModule({
  declarations: [
    AppComponent,
    SurferComponent,
    BracketvisualizerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SurferComponent]
})
export class AppModule { }
