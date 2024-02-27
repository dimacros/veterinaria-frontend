import { Paciente } from "./Paciente.model";
import { Psicologo } from "./Psicologo.model";

export interface Cita {
    codigo: number;
    paciente: Paciente;
    psicologo: Psicologo;
    fecha: string;
    hora: string;
    estado: string;
    apuntes: string;
}