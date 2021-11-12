var s = 'saveChangesInTheEditor';
var n=0;
var ch = '';


function camelCase(s){
    //sempre que encontrar uma letra maiuscula n++
    for(let i=0; i<s.length; i++){
        ch = s.charAt(i);
        if(ch === ch.toUpperCase()) {
            n++; 
        }
    } 
    //+1 pois a primeira palavra começa com minuscula, 
    //essa função retorna a quatidade de maiusculas
    return n+1;
}

console.log(camelCase(s));

