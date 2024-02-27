import { Distrito } from "./Distrito.model";
import { Especialidad } from "./Especialidad.model";

export interface Psicologo {
    codigo: number;
    nombres: string;
    apellidos: string;
    dni: string;
    genero: string;
    distrito: Distrito;
    cmp: string;
    cpp: string;
    experiencia: string;
    especialidad: Especialidad;
    estudios: string;
    email: string;
    clave: string;
}