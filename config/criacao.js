const fs = require('fs')
const path = require('path')
let dados = `const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send('Ola mundo');
})
app.listen(3000,()=>{
    console.log("https://localhost:3000")
})
`

// module.exports = 
class criacao{
    file(file_name){
        if(!fs.existsSync(file_name)){
            fs.writeFile(file_name,dados,result=>{
                if(result == "null"){
                    console.log("Ocorreu um erro")
                }else{
                    console.log(`API ${file_name} criada com sucesso`)
                }
                console.log("Feito")
             })
        }
    }

   async folder(folder_name){
        if(!fs.existsSync(folder_name)){
            fs.mkdir(folder_name,(erro)=>{
            })
            await fs.mkdir('./'+folder_name+'/src',(erro)=>{

            })
            
        }else{
            console.log("Esta API já existe")
        }
        
    }    
} 



let teste = new criacao
teste.folder("test")