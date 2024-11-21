let nickName = "Karenyou"
let xpPlayer = 3000
let rankPlayer = ""

if (xpPlayer <= 1000) {
    rankPlayer = "Ferro"
}else if(xpPlayer>=1001 && xpPlayer<=2000 ){
    rankPlayer = "Bronze"
}else if(xpPlayer>=2001 && xpPlayer<=5000 ){
    rankPlayer = "Prata"
}else if(xpPlayer>=5001 && xpPlayer<=7000 ){
    rankPlayer = "Ouro"
}else if(xpPlayer>=7001 && xpPlayer<=8000 ){
    rankPlayer = "Platina"
}else if(xpPlayer>=8001 && xpPlayer<=9000 ){
    rankPlayer = "Ascendente"
}else if(xpPlayer>=9001 && xpPlayer<=10000 ){
    rankPlayer = "Imortal"
}else {
  rankPlayer = "Radiante"
}

console.log("O Herói "+nickName+" está no nível de "+rankPlayer)
