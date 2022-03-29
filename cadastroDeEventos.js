const diaDeHoje = 20220402, diaDoCadastro = 20220401, idadeDaPessoa = 15
var listaDeParticipantes = ["Ana","Pedro", "Maria","João"]

if (diaDeHoje > diaDoCadastro){
    console.log('\nCadastro não permitido. Por favor insira uma data válida!\n')
}
else{
    console.log('Cadastro permitido! A data escolhida é válida.\n')
}

if (idadeDaPessoa < 18){
    console.log('Cadastro não permitido devido a idade da pessoa ser menor do que 18 anos!\n')
}
else{
    console.log('Cadastro pode ser realizado por se tratar de uma pessoa maior de idade.\n')
}

if (listaDeParticipantes.length < 100){
    console.log("A lista de participantes contêm menos de 100 pessoas. "+"Pode seguir com o cadastro.\n")
}
else{
    console.log("Limite de participantes foi atingido!\n")
}

for(let index = 0; index < listaDeParticipantes.length; index++){
    const participantes = listaDeParticipantes[index]
    console.log(participantes+'\n')
}
