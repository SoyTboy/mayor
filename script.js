let n1 = 800
let n2 = 900
let n3 = 1000

comparar ();
function comparar() {
    if(n1 > n2 && n1 > n3){
        console.log("n1 es mayor")
    }else if(n2 > n1 && n2 > n3){
        console.log("n2 es mayor")
    }else{
        console.log("n3 es mayor")
    }
}