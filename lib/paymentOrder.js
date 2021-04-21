import FlowApi from "flowcl-node-api-client";
/**
 * Ejemplo de creación de una orden de cobro, iniciando una transacción de pago
 * Utiliza el método payment/create
 */

 export default async function paymentOrder(amount){

    const config = require("./config.json");


    
    //Para datos opcionales campo "optional" prepara un arreglo JSON
    const optional = {
        "rut": "9999999-9",
        "otroDato": "otroDato"
    };
    //Prepara el arreglo de datos
    const params = {
        "commerceOrder": Math.floor(Math.random() * (2000 - 1100 + 1)) + 1100,
        "subject": "Pago de prueba",
        "currency": "CLP",
        "amount": amount,
        "email": "efuentealba@json.cl",
        "paymentMethod": 9,
        "urlConfirmation": config.baseURL + "/payment_confirm",
        "urlReturn": config.baseURL + "/result",
        ...optional
    };
    //Define el metodo a usar
    const serviceName = "payment/create";
    
    try {
        // Instancia la clase FlowApi
        const flowApi = new FlowApi(config);
        // Ejecuta el servicio
        let response = await flowApi.send(serviceName, params, "POST");
        //Prepara url para redireccionar el browser del pagador
        const redirect = response.url + "?token=" + response.token;
        console.log(`location: ${redirect}`)
    } catch(error) {
        console.log(error.message)
    }
}