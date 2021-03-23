var dolar = prompt("Qual a cotação atual do dolar?")
var preco = prompt("Qual o preço do produto em dolar?")
parseFloat(dolar)
parseFloat(preco)
preco = preco * dolar
preco = preco.toFixed(2)
alert("O valor do produto em real é: " + preco)