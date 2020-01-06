export default class Produto {

    id;
    name;
    code;


    constructor(){}

    get id(){
        return this.id;
    }

    set id(id){
        this.id = id;
    }

    get name(){
        return this.name
    }

    set name(name){
        this.name = name;
    }

    get code(){
        return this.code;
    }

    set code(code) {
        this.code = code;
    }

}