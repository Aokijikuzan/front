var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Objet à la vollée
var totoObject = {
    nom: 'toto',
    prenom: 'titi',
    affiche: function () {
        console.log('je m\'appelle ' + this.prenom);
    }
};
// import {Rezctangle} from './demo.ts'
var Personne = /** @class */ (function () {
    function Personne(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    Personne.prototype.affiche = function () {
        console.log(this.nom + " " + this.prenom);
    };
    return Personne;
}());
var mickey = new Personne('mickey', 'mouse');
totoObject.affiche();
mickey.affiche();
var Rectangle = /** @class */ (function () {
    function Rectangle(largeur, longueur) {
        this.largeur = largeur;
        this.longueur = longueur;
    }
    Rectangle.prototype.aire = function () {
        return this.largeur * this.longueur;
    };
    return Rectangle;
}());
var Carre = /** @class */ (function (_super) {
    __extends(Carre, _super);
    function Carre(cote) {
        return _super.call(this, cote, cote) || this;
    }
    return Carre;
}(Rectangle));
var _a = [0, 9], d = _a[0], g = _a[1], autres = _a.slice(2);
console.log('d= ' + d + ' et g = ' + g + 'vet autres = ' + autres);
