import { Municipio } from './municipio.model';

export class Endereco {

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

    getEndereco(): string {
        return this.logradouro + ", " + 
        this.numero + ", " + 
        this.bairro + ", " + 
        this.municipio.nome;
    }

}
