const fs = require('fs')
let dados = `const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('Ola mundo');
})
app.listen(3000,()=>{
    console.log("https://localhost:3000")
})
`

module.exports = class criacao{
    arquivo(nome_arquivo){
        if(!fs.existsSync(nome_arquivo)){
            fs.writeFile(nome_arquivo,dados,resultado=>{
                if(resultado == "null"){
                    console.log("Ocorreu um erro")
                }else{
                    console.log(`API ${nome_arquivo} criada com sucesso`)
                }
                console.log("Feito")
             })
        }
    }

    pasta(nome_pasta){
        if(!fs.existsSync(nome_pasta)){
            fs.mkdir(nome_pasta,(erro)=>{
            })
        }else{
            console.log("Esta API já existe")
        }
        
    }    
} 



