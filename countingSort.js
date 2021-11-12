
function countingSort(arr) {
    let a = {};
   
    for (var i = 0; i < arr.length; i++) {
        a[arr[i][0]] = [];
    }
    
    for (var i = 0; i < arr.length / 2; i++) {
        a[arr[i][0]].push(["-"]);
    }
   
    for (var i = (arr.length / 2); i < arr.length; i++) {
        a[arr[i][0]].push([arr[i][1]]);
    }
    
    let str = '';
    for(var i in a) {
     str+=a[i].join(' ')+" ";
    }

    console.log(str);
} 

