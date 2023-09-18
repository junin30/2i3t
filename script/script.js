escrever = msg => alert(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) =>{
    let delta =  sub(mult(b,b),mult(4,mult(a,c)));
    if(delta < 0 ) return "Não possui Raiz Real.";
    if(delta == 0 ) return "X1 = X2 =" + div(-b,mult(2,a));
    return "X1 = " + div(soma(-b,raiz(delta)),mult(2,a)) + " X2 = "
    + div(sub(-b,raiz(delta)),mult(2,a));
}


let a ="";
let b =0;
let resultado =0;
let executar = "";

if(executar== ""){
    resultado =0
}

function mostrar_resultado(){
 document.getElementById("resultado").value=valor;
}
function calcular(){
    if(executar != ""){
    if(executar = "soma") mostrar_resultado(soma(a,b));
    if(executar = "sub") mostrar_resultado(sub(a,b));
    if(executar = "div") mostrar_resultado(div(a,b));
    if(executar = "mult") mostrar_resultado(mult(a,b));
    executar = "";
    a= ""
    b= "";
    }
}

function digitando(tecla){
   if(executar == ""){ 
    a += tecla;
    alert(a);
   }else{
    b += tecla;
   }

}
