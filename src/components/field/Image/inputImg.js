const IMG_PATH = "../../../img/";

export const InputImg={
    "0": require("../../../img/churrasco.jpg"),
    "1": require("../../../img/chef.jpeg"),
    "2": require("../../../img/custom.jpg")
}


/*
*       utilizar path para pegar imagens,
*       assim fica mais definido e facil descobrir 
*       qual imagem você está usando.
*/
export const Imagens = {
    churrasco : {
        url: require(`${IMG_PATH}churrasco.jpg`),
        alt: "Churrasco"
    },
    chef: {
        url: require(`${IMG_PATH}chef.jpeg`),
        alt: "Chef"
    },
    custom: {
        url: require(`${IMG_PATH}custom.jpg`),
        alt: "Custom"
    }
}