import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketvisualizerComponent } from './bracketvisualizer/bracketvisualizer.component';

const routes: Routes = [
  { path: 'bracket-visualizer', component: BracketvisualizerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
