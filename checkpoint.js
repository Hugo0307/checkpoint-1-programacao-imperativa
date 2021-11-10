/**
 * @author Hugo Almeida
 * @since 09/11/2021
 * @param {*} prato 
 * @param {*} tempo 
 */
function microondas(prato, tempo) {
    
    let poucoTempo = 'Tempo insuficiente!';
    let inexistente = 'Prato inexistente!';
    let muitoTempo = 'kabumm!!!';
    let mensagemFinal = 'Prato pronto, bom apetite!!!';

    switch (prato) {
        case 1 :
            if(tempo > 20 && tempo != 30) {
                console.log('A pipoca queimou!');
            }
            if(tempo < 10){
                console.log(poucoTempo);
            } 
            if(tempo == 30) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        case 2 :
            if(tempo > 16 && tempo != 24) {
                console.log('O macarrão queimou!');
            }
            if(tempo < 8){
                console.log(poucoTempo);
            } 
            if(tempo == 24) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        case 3 :
            if(tempo > 30  && tempo != 45) {
                console.log('A carne queimou!');
            }
            if(tempo < 15){
                console.log(poucoTempo);
            } 
            if(tempo == 45) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        case 4 :
            if(tempo > 24  && tempo != 36) {
                console.log('O feijão queimou!');
            }
            if(tempo < 12){
                console.log(poucoTempo);
            } 
            if(tempo == 36) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        case 5 :
            if(tempo > 16 && tempo != 24) {
                console.log('O brigadeiro queimou!');
            }
            if(tempo < 8){
                console.log(poucoTempo);
            } 
            if(tempo == 24) {
                console.log(muitoTempo);
            }
            console.log(mensagemFinal);
        break;
        default : 
            console.log(inexistente);
            console.log(mensagemFinal);

    }
}
microondas(4,25);

