var et = 1;
var r = 1.2;
console.log('entier ' + et);
console.log('mon reel ' + r);
var b = true;
var str = 'string';
var strNb = '123 est un chiffre';
console.log('result' + parseInt(strNb));
console.log(strNb.split(' '));
console.log(strNb.slice(3, 7));
console.log(strNb.slice(-3));
console.log('-----------------------------');
var tab = [];
var tab1 = [];
var tabInit = [1, 2, 3, 4];
tab.push(0);
for (var index = 0; index < tabInit.length; index++) {
    var element = tabInit[index];
    console.log('for classiq ' + element);
}
console.log('-----------------------------');
for (var i in tabInit) {
    console.log('let in ' + i);
}
console.log('-----------------------------');
for (var _i = 0, tabInit_1 = tabInit; _i < tabInit_1.length; _i++) {
    var i = tabInit_1[_i];
    console.log('let of ' + i);
}
console.log('-----------------------------');
tabInit.forEach(function (e, i) { return console.log('for each ' + i + ' : ' + e); });
console.log('-----------------------------');
tabInit.forEach(function (e) { return console.log('for each' + e); });
console.log('-----------------------------');
var carre = tabInit.map(function (e) { return Math.pow(e, 2); });
console.log('carre ' + carre);
var somme = tabInit.reduce(function (a, e) { return a += e; });
console.log(somme);
//filter:lambda boolean, sort lambda : 0 , -1 ou 1
var monEnum;
(function (monEnum) {
    monEnum[monEnum["A"] = 0] = "A";
    monEnum[monEnum["B"] = 1] = "B";
    monEnum[monEnum["C"] = 2] = "C";
})(monEnum || (monEnum = {}));
;
var eu = monEnum.A;
console.log('-----------------------------');
function carre1(x) {
    return Math.pow(x, 2);
}
var carrelambda = function (x) { return Math.pow(x, 2); };
var puissance = function (x, p) {
    return p === undefined ? Math.pow(x, 2) : Math.pow(x, p);
};
var sommeLambda = function (x) {
    var autre = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        autre[_i - 1] = arguments[_i];
    }
    return autre.reduce(function (s, e) { return s += e; }) + x;
};
console.log(sommeLambda(1, 2, 3, 9, 8));
