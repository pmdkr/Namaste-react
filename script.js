
// var n =2;
// function square (num){
//     var ans =num*num;
//     return ans;
// }

// var square2 =square(n);
// var square4 = square(4);

// console.log(square2)

function outer(){
    var x =10;
    function inner(){
        
        console.log(x);
    }
    inner();
}

outer();