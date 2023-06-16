function playthegame(){

    if(confirm("Souhaitez-vous jouer au jeu?")=== false ){
        alert("Pas de problème au revoir")
    }else{
        let nmb=prompt("Tapez un nombre entre 0 et 10")
        if(nmb==="" || isNaN(nmb)){
            alert("Désolé,ce n'est pas un numéro,au revoir" )
        }
        else if(nmb<0 || nmb>10){
            alert("Désolé, ce n'est pas un bon chiffre,au revoir")
        }
        else{
            let computerNumber=math.floor(math.random(nmb))
            compareNumbers(nmb,computerNumber)
        }
    }
}
function compareNumbers (userNumber,computerNumber){
    for(i=0;i>3;i++){
    if (userNumber===computerNumber){
        alert(WINNER)
    break;
    }
    else if (userNumber>computerNumber){
        userNumber=prompt("Votre numéro est plus grand que celui de l'ordinateur")
    }
    else if (userNumber<computerNumber){
        userNumber=prompt("Votre numéro est plus petit que celui de l'ordinateur")
    }
    else if (i[2] && userNumber!=computerNumber){
        alert("Hors de chance et le computer number est:",+computerNumber)
    }
    }
}