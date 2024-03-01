import { Paciente } from "./Paciente.model";
import { Psicologo } from "./Psicologo.model";

export interface Cita {
    codigo: number;
    paciente: Paciente;
    psicologo: Psicologo;
    fecha: string;
    hora: string;
    reservationDate: Date;
    estado: string;
    apuntes: string;
}

export interface AddCita {
    paciente: {
        codigo: number;
    },
    psicologo: {
        codigo: number;
    },
    fecha: string|Date;
    hora: string;
    estado: string;
    apuntes: string;
}