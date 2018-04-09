import { Endereco } from "./endereco.model";
import { Serie } from "./serie.model";

export interface Escola {

    id: number;
    nome: string;
    telefone: string;
    endereco: Endereco;
    series: Array<Serie>;

}