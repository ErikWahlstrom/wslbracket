import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule, MatFormFieldModule, MatSelectModule, MatGridListModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BracketvisualizerComponent } from './bracketvisualizer/bracketvisualizer.component';
import { SurferComponent } from './surfer/surfer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SurferComponent,
    BracketvisualizerComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    AppRoutingModule,
    DragDropModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [SurferComponent]
})
export class AppModule { }
