// geração do valor aleatório
var guess = 1;
var y = Math.floor(Math.random() * 10 + 1);
// contagem de tentativas
// até acerto    
  function submit(){
    var x = document.getElementById("guessField").Value;
    if(x == y)
    {
        alert("PARABENS!!!"+playername+", voce acertou em"+ guess + "tentativa(s)!");
        guess=1;
    }
    else if(x>y)
    {
    guess++;
    alert("opa,resposta errada!! tente um numero menor");
    }
    else
    {
        guess++;
        alert("opa, resposta errada!! tente um numero maior")
    }
  }
 function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
 }
// função para o número enviado pelo usuário
