
var  names  =  ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"] ;

function verificação (names){

  for (i = 0; i < names.length; i++){
    let inicialJ = names[i].charAt(0).toLowerCase();
    if ( inicialJ === "j" ){
      speakGoodBye();
    }
    else{
      speakHello();
    }  
  }
}

verificação(names);