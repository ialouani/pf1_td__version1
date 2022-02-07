//anadromes en 1--palindromes et en 2--anagrammes.
//FONCTION RECURSIVE DU PALINDROME.
function palindrome(str){
    if(str.length==2) return str.charAt(0)===str.charAt(1);
    if(str.length==1) return true;
    if(str.length==0) return true;
//si 3 ou plus tester legalite des extremites ..1 comme reste
//ou si pair=>nbr>=4 ..0comme reste avant meme car 2 est traitee
//donc donc str.length==0 est un cas ajoute pour des entrees speciales en
//ce qui concerne str.
    else return palindrome(str.charAt(0)+str.charAt(str.length-1)) && palindrome(str.slice(1,str.length-1));
//donc ca revient a tester les 2 extremites comme on a dit avant
//puis faire le && avec nn[...]nn en palindrome avec ss nn des 2 extremites===
//str=>{nn[...]nn===str.slice(1,str.length-1).}
//deduction de la relation par CALCULS STRUCTURES
//{{{palindrome(str)==......+palindrome(nn[...]nn=ff(str)).}}};;;;;
//voila./////
}

let str="qgrbvr";
let strabb=[2,1,32,21,222];
console.log(str.slice(1,str.length-1));
console.log(palindrome("ertytre"));
console.log(palindrome("erttre"));
console.log(palindrome("ertgtfe"));
//console.log(strabb.includes(21)); que pour les ECMA6 => on doit la faire..
function includ(str1,str2){//adapte sur mesure pour str1 un charactere simple.
//est ce que str1 est inclus dans str2;
    let i=0;let l=0;
    while(i<str1.length){
	let ai=str1.charAt(i);let k=0;
	for(let j=0;j<str2.length;j++){
	    if(ai===str2.charAt(j)) k++;}
	if(k>0) l++;
	i++;}
    if (l===str1.length) return true;
    return false;}
console.log(includ("x",str));
console.log(includ("r",str));
//FONCTION RECRUSIVE DE LANAGRAMME.
function anagramme(str1,str2,i){
    if(i==str1.length-1) return includ(str1.charAt(i),str2);
    else return includ(str1.charAt(i),str2) && anagramme(str1,str2,i+1);}
console.log(anagramme("rfghez","ghfrze",0));
console.log(anagramme("fgtyr","ggytr",0));
console.log(anagramme("fgrde","edgrh",0));
console.log(anagramme("sdfgzert","tsedfzrg",0));
//comment on a procede premierement includ qui teste si le char en args[[1]]
//est dans str2.puis str1 et str2 donnent un couple danagrammes lun par rapport
//a lautre si on peut constituer str2 ou str1 a partir des characteres de str1
//ou de str2 respectivement en entier CAR les anagrammes sont des transpositions
//dun meme modele tirage PROTOTYPE~~~~~ donc cela implique lexistence
//des memes characteres donc on ajoute un parametre i.
//si i===str1.length-1(i=0 au debut) teste si le dernier str1[len-1] existe
//dans str2. si ::i!==str1.length-1 tester lappartenance du 1er char et 
//le charactere anagramme du couple(str1_residuel,str2)===anagramme(str1,str2,
//i+1) et lajout via:: lexpression {{{includ(str1.charAt(i),str2);}}};;;
//donc fonction recursive qui renvoie une valeur de verite variables selon
//2 variable .. str1 et str2;i=0 tjrs au debut;;VOILA!!!!!!!!!!!.
//DONC on a pu tester les anagrammes en distant que la valeur de verite
//de cette evaluation est tt simplement ssi vrai((---includok&&suivi(((par i+1))))) : includ(str1.charAt(i),str2)+anagramme(str1,str2,i+1).
//VOILA, tt est fait!!!!!!!!!!!!!.
//FIN EXO7!!!!!!!!!!!!
//FIN TD 2 DE LA PF.
//FIN TD2.
//FIN.//////////
////////////////////////////////////// 




