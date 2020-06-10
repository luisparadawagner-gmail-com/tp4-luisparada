import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
	personas: Persona[] = [
		{ nombre: 'Diego', apellido: 'Maradona', edad: 59 },
		{ nombre: 'Leo', apellido: 'Messi', edad: 30 },
		{ nombre: 'Carlos', apellido: 'Teves', edad: 33 }
	];

	displayedColumns: string[] = [ 'nombre', 'apellido', 'edad', 'editar' ];
	dataSource = this.personas;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	editar(element) {
    debugger;
    this.router.navigate(['/componente-b', element])
	}
}
