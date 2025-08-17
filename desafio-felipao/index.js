// iniciando
let nomeHeroi = "Bravus";
let xp = 1001;

let nivel;
let proximoNivel;
let minXpDoProximo;
let faltam;

if (xp < 0 ) {
    console.log(`XP inaválido.`);    
    
}else if (xp >= 0 && xp <= 1000) {
    nivel = "Ferro";
    proximoNivel = "Broze";
    minXpDoProximo = 1001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} (>${minXpDoProximo}) | Faltam: ${faltam} XP`);
    
}else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
    proximoNivel = "Prata";
    minXpDoProximo = 2001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} (>${minXpDoProximo}) | Faltam: ${faltam} XP`);
        
}else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
    proximoNivel = "Ouro";
    minXpDoProximo = 5001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} (>${minXpDoProximo}) | Faltam: ${faltam} XP`);
        
}else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
    proximoNivel = "Ascedente";
    minXpDoProximo = 7001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} (>${minXpDoProximo}) | Faltam: ${faltam} XP`);
    
}else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
    proximoNivel = "Ascedente";
    minXpDoProximo = 9001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} (>${minXpDoProximo}) | Faltam: ${faltam} XP`);
    
}else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascedente";
    proximoNivel = "Imortal";
    minXpDoProximo =10001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} (>${minXpDoProximo}) | Faltam: ${faltam} XP`);
    
}else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal"
    proximoNivel = "Radiante";
    minXpDoProximo = 10001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} (>${minXpDoProximo}) | Faltam: ${faltam} XP`);
    
}else if (xp >= 10001) {
    nivel = "Radiante";
    proximoNivel = "---";
    minXpDoProximo = "---";
    faltam = "---";
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} (>${minXpDoProximo}) | Faltam: ${faltam} XP`);
    
}