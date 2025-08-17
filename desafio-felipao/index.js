// iniciando
let nomeHeroi = "Bravus";
let xp = 1500;

let nivel;
let proximoNivel;
let minXpDoProximo;
let faltam = minXpDoProximo - xp;

if (xp < 0 ) {
    console.log(`XP inaválido.`);    
    
}else if (xp >= 1000) {
    nivel = "Ferro";
    proximoNivel = "Broze";
    minXpDoProximo = 2001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} | Faltam: ${faltam} XP`);
    
}else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze"
    proximoNivel = "Prata";
    minXpDoProximo = 5001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} | Faltam: ${faltam} XP`);
        
}else if (xp >= 5001 && xp <= 7000) {
    nivel = "Prata";
    proximoNivel = "Ouro";
    minXpDoProximo = 7001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} | Faltam: ${faltam} XP`);
        
}else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
    proximoNivel = "Ascedente";
    minXpDoProximo = 9001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} | Faltam: ${faltam} XP`);
    
}else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascedente";
    proximoNivel = "Imortal";
    minXpDoProximo = 9001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} | Faltam: ${faltam} XP`);
    
}else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
    proximoNivel = "Radiante";
    minXpDoProximo =10001;
    faltam = minXpDoProximo - xp;
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} | Faltam: ${faltam} XP`);
    
}else if (xp > 10001) {
    nivel = "Radiante"
    proximoNivel = "---";
    console.log(`XP:[${xp}] | ${nomeHeroi} seu nível é: ${nivel} | Próximo: ${proximoNivel} | Faltam: ---`);
    
}else{
    console.log(`Visualização de status apartir do nível "Ferro"`);
    
}