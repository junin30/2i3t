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


escrever(equacao2Grau(3,-2,-1))
