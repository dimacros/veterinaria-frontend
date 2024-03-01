import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PsicologosService } from '../../../../Services/psicologos.service';
import { DistritosService } from '../../../../Services/distritos.service';
import { EspecialidadService } from '../../../../Services/especialidad.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-registrar-psicologos',
  templateUrl: './registrar-psicologos.component.html',
  styleUrl: './registrar-psicologos.component.css'
})
export class RegistrarPsicologosComponent implements OnInit {
  
  psicologoForm!: FormGroup;
  listDistritos: any[] = [];
  listEspecialidad: any[] = [];
  listGenders: any[] = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Femenino', value: 'Femenino' }
  ];

  constructor(
    private readonly psicologosService: PsicologosService,
    private readonly distritoService: DistritosService,
    private readonly especialidadService: EspecialidadService,
    private readonly messageService: MessageService) { }
  
  ngOnInit(): void {

    this.distritoService.listDistrito().subscribe(
      {
        next: (distritos) => this.listDistritos = distritos.map(d => ({ label: d.nombre, value: d })),
        error: (error) => this.listDistritos = []
      }
    );

    this.especialidadService.listEspecialidad().subscribe(
      {
        next: (especialidades) => this.listEspecialidad = especialidades.map(e => ({ label: e.nombre, value: e })),
        error: (error) => this.listEspecialidad = []
      }
    );

    this.clearForm();
    
  }

  onSubmit() {
    if (this.psicologoForm.valid) {
      const psicologo = this.psicologoForm.value;
      this.psicologosService.addPsicologo(psicologo).subscribe({
        next: (response) => {
          this.messageService.add({
            severity:'success', 
            summary: 'psicólogo resgistrado', 
            detail: 'psicólogo registrado exitósamente'
          });
          this.clearForm();
        },
        error: (error) => console.error('Error al registrar el psicólogo', error)
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  onDistritoChange(event: any) {
    const distrito = event.value.value;
    this.psicologoForm.patchValue({
      distrito: {
        codigo: distrito.codigo,
        nombre: distrito.nombre
      }
    });
  }

  onEspecialidadChange(event: any) {
    const especialidad = event.value.value;
    this.psicologoForm.patchValue({
      especialidad: {
        codigo: especialidad.codigo,
        nombre: especialidad.nombre
      }
    });
  }

  clearForm(){
    this.psicologoForm = new FormGroup({
      codigo: new FormControl(null), // assuming code is auto-generated or not needed in form
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      genero: new FormControl('', Validators.required),
      distrito: new FormGroup({
        codigo: new FormControl(0, [Validators.min(1)]),
        nombre: new FormControl('')
      }),
      cmp: new FormControl('', Validators.required),
      cpp: new FormControl(''),
      experiencia: new FormControl(null, [Validators.min(0)]), 
      especialidad: new FormGroup({
        codigo: new FormControl(0, [Validators.min(1)]),
        nombre: new FormControl('')
      }),
      estudios: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
}

