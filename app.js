//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let friendsList = document.getElementById('listaAmigos')
let result = document.getElementById('resultado')

function adicionarAmigo() {
    let userInput = document.getElementById('amigo').value.trim()

    if (!userInput || userInput === "") return alert("Escreva o nome do seu amigo")
          
    for (friend of friendsList.children){
        if (userInput === friend.textContent) return alert("Já existe um usuário cadastrado com este nome")        
    }
    
    let li = document.createElement("li")
    li.textContent = userInput
    friendsList.appendChild(li)
}

function sortearAmigo() {
    if (!friendsList || friendsList.children.length === 0) return alert("Não existem amigos cadastrados para o sorteio")
    
    let total = friendsList.children.length
    let random = Math.floor(Math.random() * total)
    let chosenFriend = friendsList.children[random].textContent

    result.textContent = `O escolhido foi ${chosenFriend}`

    console.log(chosenFriend)  
    // return alert(`O amigo escolhido foi ${chosenFriend}`) 
}

