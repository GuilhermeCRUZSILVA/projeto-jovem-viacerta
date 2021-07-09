const submeterFormulario = () => {
const rangeInicial = document.getElementById("rangeInicial").value;
const rangeFinal = document.getElementById("rangeFinal").value;
const minhaAposta = document.getElementById("minhaAposta").value;

realizarSorteio(+rangeInicial, +rangeFinal, +minhaAposta);
}

const realizarSorteio =(rangeInicial, rangeFinal, minhaAposta) => {
    if (!rangeInicial) {
        alert('Informe o range incial');
        return;
    } 
    if (!rangeFinal) {
        alert('Informe o range final');
        return;
    } 
    if (!minhaAposta) {
        alert('Informe a sua aposta');
        return;
    } 

   const numeroSorteado = novoSorteio (rangeInicial,rangeFinal);

   if(numeroSorteado === minhaAposta){
       alert("Parabéns você acertou ");
       return
   }

   alert(`Errou! no número sorteado foi ${numeroSorteado}`);

}

const novoSorteio =(rangeInicial, rangeFinal) => {
    return (Math.floor(Math.random() *(rangeFinal - rangeInicial +1)) + rangeInicial);
}