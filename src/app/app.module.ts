import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmpresasEditarComponent } from './components/empresas-editar/empresas-editar.component';

const appRoutes: Routes = [
   { path: '', component:EmpresasComponent},
   { path: 'edit/:id', component:EmpresasEditarComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    NavbarComponent,
    EmpresasEditarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
