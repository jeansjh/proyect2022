import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropositoComponent } from './proposito/proposito.component';
import { ContactoComponent } from './contacto/contacto.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {path: 'proposito', component:PropositoComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'galeria', component:GaleriaComponent},
  {path: 'contacto', component:ContactoComponent},
  {path: 'blog', component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
