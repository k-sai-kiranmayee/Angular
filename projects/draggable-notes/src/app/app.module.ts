import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DemoMaterialModule } from './material-module';
import {DragDropModule} from '@angular/cdk/drag-drop';
// import { DragAndDropDirective } from './drag-and-drop.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DemoMaterialModule,
    DragDropModule,
    // DragAndDropDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
