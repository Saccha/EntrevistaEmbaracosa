//Código do desafio:
let palavras = [];
let leitura = "";

do{
  leitura = gets();
  if(leitura !== ""){
    palavras.push(leitura);
    //clean(leitura)
  }
}while(leitura !== "");

ler = 0;

palavras.forEach(item=>{
  //console.log(item)
  main()
})




function readLine() {
    ler++;


    if (ler ==  1) return "sanduicheiche";
    if (ler ==  2) return "barrilarril";
    if (ler ==  3) return "ratoato";
    if (ler ==  4) return "sol";
    if (ler ==  5) return "coliseueu";
    if (ler ==  6) return "queijoijo";
    if (ler ==  7) return "astroastro";
    if (ler ==  8) return "a";
    if (ler ==  9) return "aaaaaaaaaaaaaa";
    if (ler ==  10) return "abababab";
    if (ler ==  11) return "lalilelolelo";
    if (ler ==  12) return "aaabbbcccbccc";
    if (ler ==  13) return "cafécafe";
    if (ler ==  14) return "1234512345";
    if (ler ==  15) return "aabb aabb ";
    if (ler ==  16) return "aaabbbcccbccc";
    if (ler ==  17) return "aaacbcccbbbcccbccc";
    if (ler ==  18) return "sss";
    if (ler ==  19) return "ss";
    if (ler ==  20) return "12345555555555";
    if (ler ==  21) return "1234555555555";
    if (ler ==  22) return "123455555555";
    if (ler ==  23) return "12345555555";
    if (ler ==  24) return "1234555555";
    if (ler ==  25) return "123455555";
    if (ler ==  26) return "12345555";
    if (ler ==  27) return "1234555";
    if (ler ==  28) return "123455";
    if (ler ==  29) return "12345";
    if (ler ==  30) return "ABCD ABCD ABCD ABCD ABCD ";
    return null;

}

function sop(info) {
    //System.out.println(info);
    console.log(info)
}

function lerX(){
   return palavras.shift();
//       return readLine();
}


function corrigir(vet,orig){
  let i;
  let j;
  let l;
  let guarda;
  let conta;
  let saida = [];
  let procura = "";
  let trab;
  let continua = true;
  guarda = -1;
  i = vet.length - 1;
  l = vet.length;
  procura = vet[i] + procura;
  while ((l >= 0) && (continua) ) {
      l = i - procura.length;
      if (l >= 0) {
          trab = orig.substring(i - procura.length, i);
//                sop("Palavra " + orig + "   trab " + trab + "  i " + i + "   Procura " + procura+ " Guarda = "+ guarda);
          if (trab == procura){
              saida.push(orig.substring(0, i));
              guarda = i;
          }
          i--;
          if (i >= 0) {
              procura = vet[i] + procura;
          }
      }
      else {
          continua = false;
      }
  }
  if (guarda == -1) {
      saida.push(orig);
  }
  return saida;
}


function main(){
  let st;
  let lido;
  let saida;
  let num;
  let loc;
  let lts;

  lido = lerX();
  while(lido != null){
    //console.log(lido)
      lido = lido.trim();
      if((lido.length > 0) && (lido.length <= 30)){
          lts = lido.split('');
          saida = corrigir(lts, lido);
          for(ind = saida.length - 1; ind >= 0; ind--){
              sop(saida[ind]);
          }
      }
      else {
          //sop("");
      }
      lido = lerX();
  }
}
