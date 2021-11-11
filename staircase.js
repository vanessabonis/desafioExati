var n = 4;

//numEspaços - numHashTags
//     3     -     1
//     2     -     2
//     1     -     3
//     0     -     4

//numEspacos + numHashTags = n

function stairCase(n){
    for (var i = 0; i<n; i++){
        let str = "";
        //print Espaços
        for(var numSpaces=0; numSpaces<n-i-1; numSpaces++){
            str += " ";
        }
        //print #
        for (var numHashTags=0; numHashTags<i+1; numHashTags++){
            str +="#";
        }

        console.log(str);
    }
}

stairCase(n);