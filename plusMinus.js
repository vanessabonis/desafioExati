const arr = [-4,3,-9,0,4,1];
        
let numPositivos = 0;
let numNegativos = 0;
let numZero = 0;
let tamArray = arr.length;

/*function plusMinus (arr) {

    arr.forEach(item => {
        if(item > 0){
            numPositivos++;
        }else if(item < 0){
            numNegativos++;
        }else{
            numZero++;
        }
    });

}*/

function plusMinus(arr){
    for(let i=0;i<=arr.length;i++){
        if(arr[i] > 0){
            numPositivos++;
        }else if(arr[i] < 0){
            numNegativos++;
        }else{
            numZero++;
        }
    }
}

plusMinus(arr);

let proporcaoP = numPositivos/tamArray;
let proporcaoN = numNegativos/tamArray;
let proporcaoZ = numZero/tamArray;

console.log(`${proporcaoP.toFixed(6)}\n${proporcaoN.toFixed(6)}\n${proporcaoZ.toFixed(6)}`);