function OnePlusAvg(x, y){
    // console.log("Done") 
    return 1+(x+y)/2
}
let a = 7;
let b = 8;
let c = 9;

console.log("One plus Average of a and b is", OnePlusAvg(a, b))
console.log("One plus Average of b and c is", OnePlusAvg(b, c))
console.log("One plus Average of c and a is", OnePlusAvg(c, a))

const sum = (p, q)=>{
    return p + q
}

console.log(sum(9, 7))