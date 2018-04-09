import { Escola } from "./escola.model";

export interface Serie {

    id: number;
    nome: string;
    escolas: Array<Escola>

}