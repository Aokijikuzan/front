let et : number =1;
let r: number=1.2;

console.log('entier '+et);
console.log('mon reel '+r);

let b: boolean= true;
let  str: string= 'string';
let strNb: string = '123 est un chiffre';
console.log('result'+ parseInt(strNb));
console.log(strNb.split(' '));
console.log(strNb.slice(3,7));
console.log(strNb.slice(-3));
console.log('-----------------------------');

let tab: number[]=[];
let tab1: Array<number>= [];
let tabInit=[1,2,3,4];
tab.push(0);
for (let index = 0; index < tabInit.length; index++) {
    const element = tabInit[index];
    console.log('for classiq ' + element);
    
}
console.log('-----------------------------');
for(let i in tabInit)
{
    console.log('let in '+ i);

}
console.log('-----------------------------');
for (let i of tabInit)
{
    console.log('let of ' + i);
}
console.log('-----------------------------');
tabInit.forEach((e,i) =>console.log('for each ' + i +' : '+ e));
console.log('-----------------------------');
tabInit.forEach(e => console.log('for each'+ e));
console.log('-----------------------------');
let carre= tabInit.map(e=>Math.pow(e,2));
console.log('carre '+ carre);
let somme= tabInit.reduce((a,e) => a += e);
console.log(somme);
//filter:lambda boolean, sort lambda : 0 , -1 ou 1
enum monEnum{A ,B, C};
let eu : monEnum =monEnum.A;
console.log('-----------------------------');

function carre1(x: number): number 
{
    return Math.pow(x,2);
}

let carrelambda= (x:number)=>Math.pow(x,2);
let puissance=(x:number , p?:number) =>
    p=== undefined ? Math.pow(x,2) : Math.pow(x,p);


    let sommeLambda=(x:number,...autre:number[]) =>
    autre.reduce((s,e)=>s+=e) +x ;
    console.log(sommeLambda(1,2,3,9,8));