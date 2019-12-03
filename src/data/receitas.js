import validacao from './validacao_receitas.json';
export class Receita {
    constructor(nomeReceita) {
        this.receita = nomeReceita;
        //let receitas = [...validacao];
        const produtos = validacao.produtos;
        
    }

    getProduto() {
        let receita;
        produtos.forEach(element => {
            if(element.id_produto == nomeReceita) {
                receita = element;
            }    
        });
        return receita;
    }
}

export class JsonValidacao {

    constructor(json) {this.json = json}

    getAllReceitas() {
        let receitas = [];
        this.json.produtos.forEach(produto => {
            if(produto && produto.id_produto)
                receitas = [...receitas, v.titulo]
        });
        return receitas;
    }

}