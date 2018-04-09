import { Municipio } from './municipio.model';

export interface Endereco {

    id: number;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    latitude: number;
    longitude: number;
    tipoLocalizacao: string;
    municipio: Municipio;
}
