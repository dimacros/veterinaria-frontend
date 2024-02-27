import { Distrito } from "./Distrito.model";

export interface Paciente {
    codigo: number;
    nombres: string;
    apellidos: string;
    dni: string;
    genero: string;
    distrito: Distrito;
    email: string;
    clave: string;
}