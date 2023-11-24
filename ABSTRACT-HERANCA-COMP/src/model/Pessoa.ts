export abstract class Pessoa {
    private nome: string;

    public constructor(_nome: string){
        this.nome = _nome;
    }

    public setNome(_nome: string): void{
        this.nome = _nome;
    }

    public getNome(): string{
        return this.nome;
    }

    public abstract documentoIdentificador() : string

}