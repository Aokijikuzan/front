// Exercice 1
console.log('exercice 1');
function moyenneNote(tabMoyenne: number[]):number
{
    let result=0;
    for (const iterator of tabMoyenne) 
    {
        result += iterator;
    }
    console.log(' la somme des moyene' +result);

    return result/tabMoyenne.length;
}
let tab2=[1,2,7,0,4];
console.log ('la moyenne est de '+moyenneNote(tab2));
console.log('-----------------------------');
function noteMax(tabMoyenne: number[]):number
{
    let res1=tabMoyenne[0];
    for (let index = 1; index < tabMoyenne.length; index++)
    {
        if(res1< tabMoyenne[index])
        {
            let tmp= res1;
            res1= tabMoyenne[index];
            tabMoyenne[index]=tmp;
        }
       
    }

    return res1;
}
console.log('note Max '+noteMax(tab2));
console.log('-----------------------------');

function noteMin(tabMoyenne: number[]):number
{
    let res1=tabMoyenne[0];
    for (let index = 0; index < tabMoyenne.length; index++) 
    {
        if(res1> tabMoyenne[index])
        {
            let tmp= res1;
            res1= tabMoyenne[index];
            tabMoyenne[index]=tmp;
        }
    }
    return res1;
}
console.log('note min '+noteMin(tab2));
console.log('-----------------------------');

function changementNotation(moyenne20:number):number
{
    let note10=(moyenne20*10)/20;

    return note10;
}
console.log('note sur 1O = '+changementNotation(14));
console.log('-----------------------------');
function selectionNote(noteMax:number , noteMin: number, tabNote: number[])
{
    ;
    for (const iterator of tabNote)
    {
        if(iterator>noteMin && iterator< noteMax)
        {
            console.log('note comprise entre '+noteMin+ ' et '+noteMax+' : '+iterator);
        }
    } 
}
let tab3= [5,17,4,10,12,14];
selectionNote(18,2,tab3);
console.log('----------------------------------------------');
console.log('exercice 2');

let str1:string= 'slice renvoie un objet tableau, contenant une copie superficielle (shallow copy) d\'une portion du tableau d\'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.';

let copieTout= str1.slice();
console.log('copier tout le string '+copieTout);
let copie04= str1.slice(0,4);
console.log('copier unne partie du string(de pos 0 à pos 4):'+copie04);
let copie1015=str1.slice(10,15);
console.log('copier unne partie du string(de pos 10 à pos 15): '+copie1015);
let copie34Fin=str1.slice(34,str1.length);
console.log('copier unne partie du string(de pos 34 à pos fin): '+copie34Fin);
let copie34Findepassé=str1.slice(34,(str1.length+1000));
console.log('copier unne partie du string(de pos 34 à pos fin depassé) :'+copie34Findepassé);

let copieNegatif=str1.slice(-4);
console.log('copier unne partie du string(negatif): '+copieNegatif);
let copieZero=str1.slice(0);
console.log('copier unne partie du string(negatif): '+copieZero);

console.log('----------------------------------------------');
console.log('exercice 7');
enum lesCouleur{bleu,noir,blanc}
let numbre= lesCouleur[1];
console.log('numbre ='+ numbre);
console.log('----------------------------------------------');
console.log('exercice 8');
let tab4a=[2,3,44,5,0];
console.log(tab4a);
let tab4b=[2,3,44,5,0];
console.log(tab4b);
let tab4=[1,true,"three"];
console.log(tab4);
let tab4c= new Array(10);
console.log(tab4c);
console.log('----------------------------------------------');
console.log('exercice 9');
let  myUnionVar: string | number | boolean;
console.log('UnionVar before setting a value =' + myUnionVar);
myUnionVar =5;
console.log('typeof myUnionVar='+ typeof myUnionVar);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
let p0: number | number[];
let tmp1= typeof p0;
