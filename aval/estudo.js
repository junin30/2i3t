let lista_nome = ["João","Vínicius"];
function atualizar_lista(){
    let nomes = "";
    if(lista_nome.length > 0){
        for(let i=0; i < lista_nome.length; i++){
            nomes += lista_nome[i] + "<br>";
        }
        document.getElementById("lista").innerHTML = nomes;
        return;
    }
    document.getElementById("lista").innerHTML = "Lista Vazia";
}

function deleta(){
    let nome = document.getElementById("nome").value;
    if(nome !=""){
        for(let i = 0; i<lista_nome.length; i++);
        if(nome == lista_nome(i)) lista_nome.splice(i,1);
    }
     atualizar_lista();

}
function insere_ultimo() {
    let nome = document.getElementById("nome").value;
    if(nome != ""){
        lista_nome.push(nome);
        document.getElementById("nome").value="";
        atualizar_lista();
    }
}

function deletar_ultimo(){
    lista_nome.pop(nome);
    atualizar_lista();
    }

function insere_primeiro(){
    let nome = document.getElementById("nome").value;
    if(nome != ""){
        lista_nome.unshift(nome);
        document.getElementById("nome").value="";
        atualizar_lista();
    }
}

function deleta_primeiro(){
        lista_nome.shift(nome);
        atualizar_lista();
    }

    function deletar_todos(){
        lista_nome = [""]
        atualizar_lista();
        document.getElementById("lista").innerHTML = "Lista Vazia";
    }
    function ordenar_a_z(){
       lista_nome.sort();
       atualizar_lista();
    }
    function ordenar_z_a(){
         lista_nome.sort();
        lista_nome.reverse();
        atualizar_lista();
    }

