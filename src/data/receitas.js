import validacao from './validacao_receitas.json';
import resources from '../../app.json';

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

    async fetchData(code, type) {
        console.log("Fetch url:", url);
        
        console.log("Barcode type:", type);
        code = this.formatCodeByType(code, type);
        
        //CONFIGURAR O ENDPOINT NO app.json NA PASTA RAIZ
        const url = `${resources.endpointUrl}/produto/${code}`;
        
        return await fetch(url, {
            method: 'POST'
        })
        .then(response => {
            console.log("response type:", response.headers.get("Content-Type"));
            console.log("response code:", response.status);
            if(!response.headers?.get("Content-Type")) {
                return response.text();
            }
            return response.json()
        }).catch(error => {
            return error;
        });
    }


    formatCodeByType(code, type) {
        if(type === "UPC_A" && code.length == 12) {
            code = code.substring(0, 11);
        }
        return code;
    }
}