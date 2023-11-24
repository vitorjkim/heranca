import { NotaFiscal } from "./model/NotaFiscal";

const notaF1 = new NotaFiscal (`21357-952`); // instancia NF
notaF1.pessoaF.setNome(`vitor`); // NF aessando set.Nome
notaF1.pessoaF.setCpf(`2312344542-97`);
console.log(`Nome: ${notaF1.pessoaF.getNome()}`);
console.log(`Cpf: ${notaF1.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n: ${notaF1.getNumeroNotaFiscal()}`);

const notaF2v = new NotaFiscal (`21357-952`);
notaF2v.pessoaF.setNome(`joaquim`);
notaF2v.pessoaF.setCpf(`2312344542-97`);
console.log(`Nome: ${notaF2v.pessoaF.getNome()}`);
console.log(`Cpf: ${notaF2v.pessoaF.getCpf()}`);
console.log(`Nota Fiscal n: ${notaF2v.getNumeroNotaFiscal()}`);
