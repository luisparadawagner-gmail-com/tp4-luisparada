import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCService } from './../servicios/component-c.service';

export interface Persona {
	nombre: string;
	apellido: string;
	edad: number;
}

@Component({
	selector: 'app-componente-c',
	templateUrl: './componente-c.component.html',
	styleUrls: [ './componente-c.component.css' ]
})
export class ComponenteCComponent implements OnInit {
	displayedColumns: string[] = [ 'nombre', 'apellido', 'edad', 'editar' ];
	dataSource: any[] = [];

	constructor(private router: Router, private componenteCService: ComponentCService) {}

	ngOnInit(): void {
		this.getPersonas();
	}

	getPersonas() {
		this.componenteCService.getPersonas().subscribe((personas) => {
			debugger;
			this.dataSource = personas;
		});
	}
	editar(element) {
		debugger;
		this.router.navigate([ '/componente-b', element ]);
	}
}
