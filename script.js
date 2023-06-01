const button = document.getElementById('button');
const name = document.getElementById('name');
const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const resultado = document.getElementById('resultado');

const getText = (imc)=> {
    if(imc > 43) return resultado.style.background = "#F03D30", 'Obesidade Mórbida'
    if(imc > 30) return resultado.style.background = "#F0B64D", 'Obesidade Moderada'
    if(imc > 25) return resultado.style.background = "#FFF723", 'Obesidade Leve'
    if(imc > 20) return resultado.style.background = "#18F5C3", 'Normal'
    if(imc < 19.9) return resultado.style.background = "#C1D6F5", 'Abaixo do peso'
    
}

const imcCalc = () => {
    if(!peso.value || !altura.value || !name.value) return resultado.textContent = "Prencha todos os campos"

    const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    resultado.textContent = `${name.value} - ${getText(valorImc)}`;
}

button.addEventListener('click', imcCalc)
