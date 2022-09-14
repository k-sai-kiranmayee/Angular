import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsInfoComponent } from './components-info/components-info.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { LifeCycleCommunicationComponent } from './life-cycle-communication/life-cycle-communication.component';
import { RouterInfoComponent } from './router-info/router-info.component';
import { ModulesComponent } from './modules/modules.component';
import { FormsComponent } from './forms/forms.component';
import { ServicesComponent } from './services/services.component';
import { HttpInfoComponent } from './http-info/http-info.component';

// import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'components-info',
    component: ComponentsInfoComponent
  },
  {
    path: 'directives',
    component: DirectivesComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'life-cycle-communication',
    component: LifeCycleCommunicationComponent
  },
  {
    path: 'router-info',
    component: RouterInfoComponent
  },
  {
    path: 'modules',
    component: ModulesComponent
  },
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'http-info',
    component: HttpInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
