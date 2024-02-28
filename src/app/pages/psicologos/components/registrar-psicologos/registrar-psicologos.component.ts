import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PsicologosService } from '../../../../Services/psicologos.service';

@Component({
  selector: 'app-registrar-psicologos',
  templateUrl: './registrar-psicologos.component.html',
  styleUrl: './registrar-psicologos.component.css'
})
export class RegistrarPsicologosComponent implements OnInit {
  
  psicologoForm!: FormGroup;

  constructor(private psicologosService: PsicologosService) { }
  
  ngOnInit(): void {
    this.psicologoForm = new FormGroup({
      codigo: new FormControl(null), // assuming code is auto-generated or not needed in form
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      genero: new FormControl('', Validators.required),
      distrito: new FormGroup({
        codigo: new FormControl(1),
        nombre: new FormControl('')
      }),
      cmp: new FormControl('', Validators.required),
      cpp: new FormControl(''),
      experiencia: new FormControl(0, [Validators.min(0)]), 
      especialidad: new FormGroup({
        codigo: new FormControl(1),
        descripcion: new FormControl('')
      }),
      estudios: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.psicologoForm.valid) {
      const psicologo = this.psicologoForm.value;
      this.psicologosService.addPsicologo(psicologo).subscribe({
        next: (response) => console.log('Psicólogo registrado con éxito', response),
        error: (error) => console.error('Error al registrar el psicólogo', error)
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}

