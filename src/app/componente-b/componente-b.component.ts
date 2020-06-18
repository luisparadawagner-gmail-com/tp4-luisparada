import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validator, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-componente-b',
	templateUrl: './componente-b.component.html',
	styleUrls: [ './componente-b.component.css' ]
})
export class ComponenteBComponent implements OnInit {
	@Input() componenteB: any;
	@Input() textoBtn: string;

	itemForm: FormGroup;
	persona: any;

	param: any;

	constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

	ngOnInit(): void {
		debugger;		
		this.param = this.route.snapshot.params;

		if (Object.keys(this.param).length > 0) {
			this.persona = this.param;
		} else {
			this.persona = this.componenteB;
		}

		this.initForm(this.persona);
	}

	initForm(item) {
		this.itemForm = this.fb.group({
			nombre: [ item ? item.nombre : '' ],
			apellido: [ item.apellido ],
			edad: [ item.edad ]
		});
	}
}
