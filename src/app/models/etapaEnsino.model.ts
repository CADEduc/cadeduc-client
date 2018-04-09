import { Serie } from "./serie.model";

export interface EtapaEnsino {
    
    id: number;
    nome: string;
    vagasDisponiveis: number;
    series: Array<Serie>;    
    tipoEtapaEnsino: string;


}