import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { ComponenteCComponent } from './componente-c/componente-c.component';

const routes: Routes = [
	{ path: 'componente-a', component: ComponenteAComponent },
	{ path: 'componente-b', component: ComponenteBComponent },
	{ path: 'componente-c', component: ComponenteCComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
