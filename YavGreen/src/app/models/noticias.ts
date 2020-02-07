import { Persona } from './persona';
import { Imagen } from './imagen';


export class Noticias {
  id_noticias?: number;
  nombre_noticia: string;
  descripcion_noticia: string;
  id_noticia_persona: number;
  id_imagen_noticia: number;
}