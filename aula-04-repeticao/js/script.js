/*
    for(var inicial;condição;incremento/decremento){
        set de instruções;
    }

    for(i=0;i<=10;i++){
        console.log(i);
    }


    for(i=9;i>=0;i=i-2){ // i=i-2 => i-=2
        console.log(i);
    }
*/

    res = document.getElementById("result");
    
    x = "";
    for(i=0;i<=10;i++){
        //x = x + " " + i;
        x += "<br>" + i;
        //document.writeln(i);
    }
    // res.innerText = x; 
    // innerText permite a inserção somente de textos dentro de um elemento

    res.innerHTML = x; 
    // innerHTML permite a inserção de tags HTML

