class Calculadora {
// classe em ts sempre começar maiuscula
    num1:number = 10.4;
    num2:number = 26.6;
//metodo
    soma():number{
    return this.num1 + this.num2;
}

    subtrair(): number{
    return this.num1 - this.num2
}

    multiplicar(): number{
    return this.num1 * this.num2
}
}

const calc = new Calculadora();

console.log(+calc.soma());

console.log(+ calc.subtrair());

console.log(+ calc.multiplicar());

