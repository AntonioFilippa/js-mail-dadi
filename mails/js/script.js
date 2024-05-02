
//ALERT DI BENVENUTO

alert('Benvenuto')

//CREAZIONE LISTA EMAIL

var emailList = ['antoniofan@gmail.com', 'antoniofan1@gmail.com', 'antoniofan2@gmail.com']

//PROMPT UTENTE

var emailList =(prompt(' Inserire email di accesso') )

//SHOW EMAIL IN LOG

console.log(emailList)

var emailExist = false;


//RICHIESTA ACCESSO DA UTENTE E VERIFICA

for (var i = 0; i < emailList.length; i++){
    
    var emails = emailList[i];
    
    
        if (emails == emailList[i]){

            emailExist = true;
        }
   
}
// RISPOSTA AD ACCESSO

if (emailExist == true){
    
    
    console.log('Accesso consentito');

}else{

    console.log('Accesso negato');
}



