import { Persona } from './persona';

export class Evento {
  id_evento?: number;
  nombre_evento: string;
  fecha_evento: Date;
  lugar_evento: string;
  objetivo_evento: string;
  puntaje_evento: number;
  codigo_evento: string;
  id_persona_evento: number;
  id_imagen_evento: number;

}