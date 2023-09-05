const readline = require('readline-sync');

const listaAlunos = [];
const aluno1 = {
    id: 1,
    nome: 'fulano',
    notas: [10, 9]
}
const aluno2 = {
    id: 2,
    nome: 'jubileu',
    notas: [9, 8]
}
listaAlunos.push(aluno1)
listaAlunos.push(aluno2)
let saida = false;

do{

    let selecao = readline.questionInt(`- Menu Alunos -
        ======================
        Selecione uma opcao:
        1 - Listar alunos
        2 - Sair
        3 - Cadastrar novo aluno
        4 - Alterar cadastro
        ======================

        `)

    switch (selecao){
        case 1:
            console.log('- Lista de Alunos -')
            console.log('======================')
            // console.log(listaAlunos)
            for (const alun of listaAlunos) {
                
                console.log(`Nome do aluno: ${alun.nome}`)
                console.log(`Numero da matricula: ${alun.id}`)
                let soma = 0
                let media = 0
    
                for (let index = 0; index < alun.notas.length; index++){
                    console.log(`nota ${index + 1}: ${alun.notas[index]}`)
                    soma += alun.notas[index];

                }
                media = soma/2
                console.log(`Media: ${media}`)
            }
            break;
        case 2:
            console.log('Encerrando operações..')
            saida = true
            break;
        case 3:
            const novoAluno = {
                id: 0,
                nome: '',
                notas: [0, 0]
            }

            let novoNome = readline.question('Digite o nome do novo aluno: ')
            novoAluno.nome = novoNome
            novoAluno.notas[0] = readline.questionFloat('Digite a primeira nota. ')
            novoAluno.notas[1] = readline.questionFloat('Digite a segunda nota. ')
            novoAluno.id = listaAlunos.length + 1;

            listaAlunos.push(novoAluno)
            console.log(`aluno(a) ${novoNome} cadastrado com sucesso!`)

            break;
        case 4:
            let opcaoBusca = readline.question('Informe o nome do aluno que quer alterar.')
            for(const ocorrencia of listaAlunos){
                let valid = 0
                if(ocorrencia.nome == opcaoBusca){

                    let AtribAlteracao = readline.questionInt(`Digite o numeral da opcao qu deseja alterar:
                    1 - nome: 
                    2 - nota 1: 
                    3 - nota 2: `)

                    switch(AtribAlteracao){
                        case 1: 
                            ocorrencia.nome = readline.question('Digite o novo nome: ')
                            break;
                        case 2:
                            ocorrencia.notas[0] = readline.questionFloat('Informe a primeira nota do aluno. ')
                            break;
                        case 3: 
                            ocorrencia.notas[1] = readline.questionFloat('Informe a segunda nota do aluno. ')
                            break;
                        default:
                            console.log('A opção escolhida é inválida')
                            break;
                        
                    }
                    console.log('Alteracao realizada com sucesso!')
                }else{
                    valid++;
                    if(valid === listaAlunos.length - 1){
                        console.log(`Busca não encontrada.`)
                        break;
                    }
                }

            }
            break;

        default:
            console.log('Opção inválida. Digite o numeral de uma das opções do menu.')
            saida = false;
            break;
        
    }
}while(saida === false)