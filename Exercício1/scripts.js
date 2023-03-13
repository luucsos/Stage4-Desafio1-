let numberOne = parseFloat (prompt("Insira o primeiro número: "))
let numberTwo = parseFloat (prompt("Insira o segundo número"))


numberOne = Number(numberOne)
numberTwo = Number(numberTwo)


let resultado = []

function sum(numberOne, numberTwo)
{
  
  return (numberOne+numberTwo);
}

function sub()
{
  
  return (numberOne-numberTwo);
}

function mult()
{
  
  return (numberOne*numberTwo);
}

function div()
{
  
  return (numberOne/numberTwo );
}

function rest()
{
  
  return (numberOne%numberTwo);
}

function pairOrOdd()
{
  
  if(rest  == 0){
    alert("Impar");
} else {
    alert("Impar");
}

alert(total);
}


result1 = sum(numberOne, numberTwo) 
result2 = sub(numberOne, numberTwo)
result3 = mult(numberOne, numberTwo)
result4 = div(numberOne, numberTwo)
result5 = rest(numberOne, numberTwo)


alert("A soma dos dois números é: " + result1)
alert("A subtração dos dois números é: " + result2)
alert("A multiplicação dos dois números é: " + result3)
alert("A divisão dos dois números é: " + result4)
alert("A divisão dos dois números é: " + result5)

alert("A divisão dos dois números é: " + pairOrOdd())



