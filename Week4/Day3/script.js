function playTheGame(){
    let play=confirm("Souhaitez-vous jouer au jeu?")
    if (play===false){
        alert("Pas de problème au revoir")
    }
    else{
        let nomb=(prompt("Tapez un nombre entre 0 et 10"))
        if (nomb==="" || isNaN(nomb)){
            alert("Désolé,ce n'est pas un numéro,au revoi")
        } 
        else if( nomb<0 || nomb>10){
            alert("Désolé, ce n'est pas un bon chiffre,au revoir")
        }
        else{
            computerNumber=Math.floor(Math.random() *11)
            compareNumbers(nomb,computerNumber)
        }
    }
}
function compareNumbers(userNumber,computerNumber) {
    for(i=0; i<3 ;i++){
    if(i==2 && userNumber!=computerNumber)
    {
        alert("Hors de chance et le computer number est:" +computerNumber)
    }
    if(userNumber==computerNumber){
        alert("Gagnant")
        break;
    }
    else if(userNumber>computerNumber){
        userNumber = prompt("Votre numéro est plus grand que celui de l'ordinateur,veuillez réessayer")
    }
    else if(userNumber<computerNumber){
        
        userNumber = prompt("Votre numéro est plus petit que celui de l'ordinateur,veuillez réessayer")
    }  
    }
}