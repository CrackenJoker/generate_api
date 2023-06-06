const process = require('process');
const criacao = require('./config/criacao');
const create = new criacao()


let arquivo = process.stdout.write("Nome da API=>")
process.stdin.on('data',(resultado)=>{
    create.pasta(`${resultado}`)
    create.arquivo(`${resultado}/${resultado}.js`)

    process.exit()
})