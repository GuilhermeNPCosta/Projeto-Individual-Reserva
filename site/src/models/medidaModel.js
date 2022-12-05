var database = require("../database/config");

function buscarUltimasMedidas() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `Select count(resposta1) as "Sim", (Select count(resposta1) as "Nao" from perguntas where resposta1 = "Nao") as "Nao" from perguntas where resposta1 = "Sim";
        `
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        CONVERT(varchar, momento, 108) as momento_grafico, 
                        fk_aquario 
                        from medida where fk_aquario = ${idAquario} 
                    order by id desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `Select count(resposta2) as "Dungeons_e_Dragons" ,
        (Select count(resposta2) as "Tormenta" from perguntas where resposta2 = "Tormenta") as "Tormenta",
        (Select count(resposta2) as "Shadowrun" from perguntas where resposta2 = "Shadowrun") as "Shadowrun",
        (Select count(resposta2) as "3D&T" from perguntas where resposta2 = "3D&T") as "TresD_e_T",
        (Select count(resposta2) as "CallofCthulhu" from perguntas where resposta2 = "Call_of_Cthulhu") as "CallofCthulhu"
        from perguntas where resposta2 = "Dungeons&Dragons";`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
