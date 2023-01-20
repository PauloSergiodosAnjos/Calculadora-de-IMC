const NumKg = Number (prompt('Digite o seu peso em Kg'));
const AlturaemCm = Number (prompt('Digite sua altura em cm'));
const IMC = document.getElementById('imc');
const conta = (NumKg  / AlturaemCm ** 2);

IMC.innerHTML = `${conta.toFixed(6)}`;








