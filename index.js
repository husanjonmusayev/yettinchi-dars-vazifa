// 1 masala
// function cube (n) {
//     return n**3
// }

// console.log(cube(5));

// 2masala
// function twoNumbers(a, b) {
//     return a+b**3
// }
// console.log(twoNumbers(4, 5));


// 3 masala
// function res(a, b, c) {

//     if (a % 2 == 1) {
//         return a*
//     }
//     if (b % 2 == 1) {
//         c
//     }
//     if (c % 2 == 1) {
//         c *= c
//     }


// }
// console.log(res(5,2,3));

// const sum = function(a,b){
//     return a+b
// }
// console.log(sum(5,8));

// const sum = (a, b) => {
//     return a + b
// }
// console.log(sum(5, 4));


// Vazifa 
// 1 masala
// function one(a, b, s) {
//     let max
//     if(a>b && a>s){
//          max = a
//     }
//     if(b>a && b>s){
//         max = b
//     }
//     if(s>b && s>b){
//         max = s
//     }
//     return max
  
// }
// console.log(one(2,5,4));

// 2 masala
// function two(a,b) {
//     let sum =0;
//     for (let i = a; i <= b; i++) {
//         if(i%2==0){
//         sum+=i
//         }
        
//     }
//     return sum
// }
// console.log(two(4,10));

// 3 masala
// function noumb(a) {
//     let E = a%10
//     let b = Math. trunc((a/10)%10)
//     let c = Math. trunc(a/100)
//     return E+b+c
// }
// console.log(noumb(123));

// 4 masala
// function noumb(a) {
//        let sum =0;
//         let E = a%10
//         let b = Math. trunc((a/10)%10)
//         let c = Math. trunc(a/100)
        
//         if(E%2==0){
//             sum += E
//         }
//         if(b%2==0){
//             sum += b
//         }
//         if(c%2==0){
//             sum += c
//         }
//         return sum
//     }
//     console.log(noumb(124));
   
// 5 masala
// function thre (a){
//     let res = 1;
//     for (let i = 1; i <= a; i++) {
//         if(i%2==1 && i%5==1){
//             res *= i;
//         }
//     }
//     return res;
// }
// console.log(thre(50));

// 6 masala
// function org(a){
//     let res = 0;
//     for (let i = 1; i <= a; i++) {
//         if(i%7==0 || i%5==0){
//             res ++;
//         }
//     }
//     return res;
// }