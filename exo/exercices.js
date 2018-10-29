// Exercice 1
console.log('exercice 1');
function moyenneNote(tabMoyenne) {
    var result = 0;
    for (var _i = 0, tabMoyenne_1 = tabMoyenne; _i < tabMoyenne_1.length; _i++) {
        var iterator = tabMoyenne_1[_i];
        result += iterator;
    }
    console.log(' la somme des moyene' + result);
    return result / tabMoyenne.length;
}
var tab2 = [1, 2, 7, 0, 4];
console.log('la moyenne est de ' + moyenneNote(tab2));
console.log('-----------------------------');
function noteMax(tabMoyenne) {
    var res1 = tabMoyenne[0];
    for (var index = 1; index < tabMoyenne.length; index++) {
        if (res1 < tabMoyenne[index]) {
            var tmp = res1;
            res1 = tabMoyenne[index];
            tabMoyenne[index] = tmp;
        }
    }
    return res1;
}
console.log('note Max ' + noteMax(tab2));
console.log('-----------------------------');
function noteMin(tabMoyenne) {
    var res1 = tabMoyenne[0];
    for (var index = 0; index < tabMoyenne.length; index++) {
        if (res1 > tabMoyenne[index]) {
            var tmp = res1;
            res1 = tabMoyenne[index];
            tabMoyenne[index] = tmp;
        }
    }
    return res1;
}
console.log('note min ' + noteMin(tab2));
console.log('-----------------------------');
function changementNotation(moyenne20) {
    var note10 = (moyenne20 * 10) / 20;
    return note10;
}
console.log('note sur 1O = ' + changementNotation(14));
console.log('-----------------------------');
function selectionNote(noteMax, noteMin, tabNote) {
    ;
    for (var _i = 0, tabNote_1 = tabNote; _i < tabNote_1.length; _i++) {
        var iterator = tabNote_1[_i];
        if (iterator > noteMin && iterator < noteMax) {
            console.log('note comprise entre ' + noteMin + ' et ' + noteMax + ' : ' + iterator);
        }
    }
}
var tab3 = [5, 17, 4, 10, 12, 14];
selectionNote(18, 2, tab3);
console.log('----------------------------------------------');
console.log('exercice 2');
var str1 = 'slice renvoie un objet tableau, contenant une copie superficielle (shallow copy) d\'une portion du tableau d\'origine, la portion est définie par un indice de début et un indice de fin (exclus). Le tableau original ne sera pas modifié.';
var copieTout = str1.slice();
console.log('copier tout le string ' + copieTout);
var copie04 = str1.slice(0, 4);
console.log('copier unne partie du string(de pos 0 à pos 4):' + copie04);
var copie1015 = str1.slice(10, 15);
console.log('copier unne partie du string(de pos 10 à pos 15): ' + copie1015);
var copie34Fin = str1.slice(34, str1.length);
console.log('copier unne partie du string(de pos 34 à pos fin): ' + copie34Fin);
var copie34Findepassé = str1.slice(34, (str1.length + 1000));
console.log('copier unne partie du string(de pos 34 à pos fin depassé) :' + copie34Findepassé);
var copieNegatif = str1.slice(-4);
console.log('copier unne partie du string(negatif): ' + copieNegatif);
var copieZero = str1.slice(0);
console.log('copier unne partie du string(negatif): ' + copieZero);
console.log('----------------------------------------------');
console.log('exercice 7');
var lesCouleur;
(function (lesCouleur) {
    lesCouleur[lesCouleur["bleu"] = 0] = "bleu";
    lesCouleur[lesCouleur["noir"] = 1] = "noir";
    lesCouleur[lesCouleur["blanc"] = 2] = "blanc";
})(lesCouleur || (lesCouleur = {}));
var numbre = lesCouleur[1];
console.log('numbre =' + numbre);
lesCouleur;
