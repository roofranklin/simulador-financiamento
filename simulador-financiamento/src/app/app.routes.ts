import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { FormularioComponent } from './paginas/formulario/formulario.component';
import { ResultadoComponent } from './paginas/resultado/resultado.component';

export const routes: Routes = [
    { path: '', component: FormularioComponent },
    { path: 'resultado', component: ResultadoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
