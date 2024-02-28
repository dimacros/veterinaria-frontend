import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PacientesService } from '../../../../Services/pacientes.service';

@Component({
  selector: 'app-registrar-pacientes',
  templateUrl: './registrar-pacientes.component.html',
  styleUrl: './registrar-pacientes.component.css'
})
export class RegistrarPacientesComponent implements OnInit {
  
  pacienteForm!: FormGroup;

  constructor(private pacientesService: PacientesService) { }
  
  ngOnInit(): void {
    this.pacienteForm = new FormGroup({
      // Asume que el código es auto-generado o no es necesario en el formulario
      nombres: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      dni: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      genero: new FormControl('', Validators.required),
      distrito: new FormGroup({
        codigo: new FormControl(1), // Puedes dejar esto como nulo o establecer un valor predeterminado
        nombre: new FormControl('') // Este campo puede no ser necesario si solo envías el código del distrito
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    if (this.pacienteForm.valid) {
      const paciente = this.pacienteForm.value;
      this.pacientesService.addPaciente(paciente).subscribe({
        next: (response) => console.log('Paciente registrado con éxito', response),
        error: (error) => console.error('Error al registrar el paciente', error)
      });
    } else {
      console.log('Formulario no válido');
    }
  }
}
