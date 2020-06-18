import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';

@Component({
	selector: 'app-componente-a',
	templateUrl: './componente-a.component.html',
	styleUrls: [ './componente-a.component.css' ]
})
export class ComponenteAComponent implements OnInit {
	itemForm: FormGroup;

	componenteA: any;
	showComponenteB: boolean = false;
	showComponenteA: boolean = true;
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm() {
		this.itemForm = this.fb.group({
			nombre: [ '', Validators.required ],
			apellido: [ '' ],
			edad: [ '' ]
		});
	}

	submit() {
		this.componenteA = this.itemForm.value;
		this.showComponenteB = true;
		this.showComponenteA = false;
	}
}
