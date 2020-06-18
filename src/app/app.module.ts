import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { ComponenteCComponent } from './componente-c/componente-c.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

import { ComponentCService } from './servicios/component-c.service';

@NgModule({
	declarations: [ AppComponent, ComponenteAComponent, ComponenteBComponent, ComponenteCComponent ],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatInputModule,
		MatButtonModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatGridListModule,
		MatSelectModule,
		MatSlideToggleModule,
		MatMenuModule,
		MatTableModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [ ComponentCService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
