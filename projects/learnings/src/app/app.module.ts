import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsInfoComponent } from './components-info/components-info.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifeCycleCommunicationComponent } from './life-cycle-communication/life-cycle-communication.component';
import { RouterInfoComponent } from './router-info/router-info.component';
import { ModulesComponent } from './modules/modules.component';
import { FormsComponent } from './forms/forms.component';
import { ServicesComponent } from './services/services.component';
import { HttpInfoComponent } from './http-info/http-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsInfoComponent,
    DirectivesComponent,
    PipesComponent,
    LifeCycleCommunicationComponent,
    RouterInfoComponent,
    ModulesComponent,
    FormsComponent,
    ServicesComponent,
    HttpInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
