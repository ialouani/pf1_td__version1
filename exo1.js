function nbr_donne_charstr(n){
    const str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let m=0;m<str.length;m++){
	const str_char_partie=str.charAt(m);
	if(str_char_partie.charCodeAt(0)===n) return str_char_partie;}}
function ceaser_cypher(str,key){
    let str_rslt="";
	const len=str.length;
	for(let i=0;i<len;i++){
	    const char_str_j=str.charAt(i);
	    let aaa=char_str_j.charCodeAt(0);
	    aaa+=key;
	    const char_str_2=nbr_donne_charstr(aaa);
	    str_rslt+=char_str_2;}
    return str_rslt;}
function f(){
    console.log(ceaser_cypher('ABCDE',1));
console.log(ceaser_cypher('BCDEF',-1));
console.log(ceaser_cypher('ABCDE',13));
    console.log(ceaser_cypher('NOPQR',-13));}
f();
function recip(str,key){
    return ceaser_cypher(str,-key);}
console.log("*****************");
function f2(){
    console.log(recip('ABCDE',-1));//ce qui etait avant key=-1 sur cette la
//puisque 2 result est ABCDE dont le resultat cest <<<.(arg{1}/fct)===BCDEF.
console.log(recip('BCDEF',1));
console.log(recip('ABCDE',-13));
    console.log(recip('NOPQR',13));}
//les resultats sont les memes car si on applique avec key sur str 
//et on veut lorigine de que quoi on applique
//avec -key on obtient 2>;// application sur le arg_1|() en key cest a dire
//le resultat off_1 donc resultat 2,i:1,..4==ausuivant!.///
f2();
//rendre key invisible de lexterieur cad pas passe en parametre donc...
//const key_1=13;((nn car voulant la rendre inaccesible depuis dehors
//sinon visible de lexterieur # <=> accesible pas en std_in~~~~~ pas en global
//nn plus mais uniquement a linterieur dune procedure unique.()//
function cypher(str){
    const key_1=13;let strr=str;
    return ceaser_cypher(str,key_1);}//cad en prenant les anciennes paroles
//nn visible a lexterieur !!! ~ ancrage vis a vis delle non souscris EN LECTURE
//cad si on lit lexterieur du code (clavier;//terminaL./) ou dehors des fonction
//s pour un main ~~~(C.///) on peut pas deviner le key 1----2(cas nn!!!) 
//inteprete²(),/////.() . .
console.log("*****************");
console.log(cypher('ABCDE'));
console.log("*****************");
function recip__2(str){
    const key=13;
    return recip(str,key);}
console.log(recip__2("NOPQR"));console.log("passage suite2");
function argstab(str2){//on affiche le resultat puis on extrait le
//parametre 1 correspondant.
    return recip(str2,13);}
var strr2=argstab('NOPQR');
console.log(strr2);
console.log("*****************");
function a233(str){
    let vari1=str.charAt(8);
    let i=1;
    while(str.charAt(8+i)!=","){
	vari1+=str.charAt(8+i);
	if(str.charAt(8+i+2)==",") return vari1;
i++;}
    let str222=vari1;
    return str222;}
console.log(a233("cypher('NOPQR',-13)"));
//au debut key netait pas invisible a 100% car on peut via ces 2 configurations faute du mode strict qui  permet pas un acces aux arguments de la fonction cypher ou ceaser_cypher lire la valeur de str voire de la cle comme cest precise la dessus:
function a233_clef211(str){
    let i=1;
    while(str.charAt(8+i)!=","){
	i++;}
    let varr2=str.charAt(8+i+2);
    let j=8+i+2;
    let k=1;
   while(str.charAt(j+k)!=")"){
	varr2+=str.charAt(j+k);
       if(str.charAt(j+k+1)==")") return varr2;
	k++;}
    let str222=varr2;
    return str222;}
console.log(a233_clef211("cypher('NOPQR',-13)"));
console.log("******************");
//donc on veut la rendre invisible cad inconnue par acces reading en dehors
//de la fonction et par nous aussi via un passage de parametre et la deduction 
//de key par cette fonction ci-dessus ss connaitre de prealable le resultat
//retournee dou methode une nn.////

//!!!!!!!!!!!!!!!!!!!!
//a cet instant la fonction de chiffrement et de dechiffrement est faite
//avec key indispo. en dehors++ meme en parametres par la fonction
//a233_clef211(str#origine:->////methode((1))).
//donc faire cypher et recip__2 au lieu de recip et ceaser_cypher.

//MAINTENANT FONCTION renvoyant a la fois la fonction dencodage et de decodage.

function cypher_2011(str){
    const key=5;
    return ceaser_cypher(str,key);}
function recip__2_2011(str){
    const key=5;
    return recip(str,key);}

function cesar(){
function cypher_droit(str){
    return cypher_2011(str);}
    function cypher_inverse(str){
	return recip__2_2011(str);}
    return [cypher_droit,cypher_inverse];}
console.log("***************");
console.log("***************");
//la cle de chiffrement est totalement invisible (en approfondissement oui(!!!))
//et est donc inaccessible par des encapsulations en parallele bien gerees.
//les variables de travail en coeur statuttt sont EN const pour la plupart.
//+possibilite de faire varier la cle impossible.
//en premier etre inaccessible vu que cest a linterieur par parametres applica
//tion fct base direct impliquait suivant ce qui precede connaissance de key
//par visibilite vis a vis de lutilisateur donc la rendre plus un argument
//de fonction pour eviter lacces => 1er choix la mettre en global(forcer via con
//st fichier sourcee une cle constante) mais cela laisser les fonctions avoir
//une barre dextraction pour mise a jour (pre--) des liaisons dans fermeture[2]
//fct et plus(nn~~~car aucun effet de bord externe...).....donc
//on encapsule apresau lieu quelle retourne le chiffrement elle retourne 
//meme le dechiffrement.cad prend un string le code puis autrement le PREND
//puis le decode.cad cesar(stringg) renvoie un tableau de fct:
//la 1ere fonction a pour but de retourner pour un str cypher(str) soit
//le codage de lentree et la 2ieme (cypher_inverse) le decodage du dernier
//qui est par difinition simple la chaine dont le codage a aboutit a ca.
//on ladapte par cesar() prototype entierr.
let stringg="HJKL";
console.log(((cesar())[0])(stringg),((cesar())[1])(stringg));
//le code ainsi fait renvoie les 2 fcts avec test via le retour index.//
//puis largument dentree.
console.log(typeof(cesar));
/*let vcesar={
    key:13,
    fed111:function(str){
    return ceaser_cypher(str,this.key);},
    fedd222:function(str){
	return recip(str,this.key);}}*/
//object vcesar qui contient la fonction qui parametre la cle
//+les deductions en terme dimplementation >;/// des e/d(s)²²²²² ./////
//DONC:!!!!!!!!!!!!!!!!!((())))))):>>>>>>
//==>>>
//vcesar devient objet avec une cle de chiffrement et les fonctions de codage
//et de decodage avec possibilite de changer la cle relative a lui;;;
//en dautres termes on cree un bloc contenant les algos et parametrage
//du parametre essentiel de lalgo.((les 2.//))
console.log("*********************************");
function ggg(keya){
    function f(){
this.clecfrh=keya;
	this.key_param=function gh01(key){this.clecfrh=key;};
//pour avoir le champ egal a [Function: gh01].////
	this.cd011=function e(str){return ceaser_cypher(str,keya);};
	this.cd0233=function d(str){return recip(str,keya);};}
//comment passer apres le key?=>fonction relative a la classe gggG()//.()
    //return aoo=new f();
    let ao=new f();//console.log(ao);(avec les formes [Function:???.//()]//.///
    /*function ff(oo,keyy){
	oo.key=keyy;}*/
 
    return ao;//donc prend en compte une fonction qui permet
//de modifier la cle key du dernier objet instancie par cette fct...// 
//adapte par une fonction qui permet de modifier la cle en fonction de oo entree.
    }//ADAPTE!!!!!!!!!!!!!!!!!!!!!!!
//resume apres........./::>>>
//ggg(keya) permet de construire une instance avec this qui sera
//un objet contenant la cle num1===(en.valuee){{clecfrh}} et le parametrage
//en[[new f().key_param=e1 en let et e1(23)=>>new f().KEY devient 23.
//+2 fcts de codages.on retourne une instance image de cette configuration 
//avec keya donnee. 
function ginal(str){
    const keyat=5;
    let ooo=ggg(keyat);
//quitte a faire a linterieur encore faire post-(pre~//).../
    let e11=ooo.cd011;let e1=e11(str);//car e retiree puis evaluation en str.
    let e22=ooo.cd0233;let e2=e22(str);//de meme.
    function ffendd(str){
this.str1=str;
	this.cle=ooo.clecfrh;
		this.e10=e1;
	this.e20=e2;}//tjrs this. dedans fonction avec this donc === 
//objet instancie plus tard par la fonction on instancie par new fonction()
//puis lui le this pour lui CEST lobjet instancie par lui!!!!!
    let opp=new ffendd(str);
    return opp;}//celle la prend un str et::>>>
//considere un ggg(const key) puis tire la fct1 et levalue en arg1===(str)
//puis la meme chose pour le decodage et puis prendune instance
//dune fonction qui permet de retourner un object rassemblant ces informations
//avec argument str DONNE au debut et on retourne le resultat FINAL.
console.log(ginal("NOPQR"));//exemple qui marche.

//permet de construire un nouveau objet avec une cle parametre par lapplication
//dune methode relative a cet objet cest une methode qui par les rassemblements
//permet la creation dun objet avec une fonction method de changement de 
//cle et .key + les 2 fcts cd & dc qui prennent un str et renvoie ce qu'est
//attendu davance./////

//vcesar nest pas une classe (reserved word sinn CAR mots specials et ++(|!!&<).///
//donc on cree une fonction ggg() qui contient la fonction constructeur
//qui depuis une cle cree un objet similary cad avec fc1<<fd2 les 2 suivants
//la valeur de la cle cad this.key(>>!!!===parametre de la fonction
//qui construit cad new_AA.)./////  
//maintenant on doit faire une fonction qui prend un str et renvoie le resultat.

//RESUME:
//avec ginal(str) on fixe la cle en fixant soit-disant sa valeur 
//puis on poursuit avec les resultats fonction de str seulement a ce stade.
//la difference par rapport a la version precedente cest que on retourne les re
//sultats sous une forme bien COMPRISE au lieu des fonctions associees.
//si on combine les 2(la 2ieme version le keyat (===cle de dechiffrement) est
//invisible en global ainsi quaux parametres dentrees des fonctions executives
//MERES.) on aura une forme qui va respecter tt cela mais en renvoyant le
//resultat par une facon commune ok;// choisissons la 2ieme avec respect
//de key pas dans parametres (ginal(str) est le coeur => (str#key=>OK.))
//et pas de cle utilisee declaree avant en global.
//on peut retourner les fcts cles par la methode classique ou bien
//!!!!!!!!!!!!les valeurs par la version2; essayons de FOURNIR une version
//qui retournera les fonctions tt en utilisant la methode de la v2 qui masque
//au maximum la cle...(dedans et MAISPLUS QUE CA)

function ggend(){
    const key=5;
    let o44=ggg(key);
    let e111=o44.cd011;
    let e222=o44.cd0233;
    function fenc(str){return e111(str);}
    function fdec(str){return e222(str);}
    return [fenc,fdec];}//retourne les 2 fonctions avec les particularites v2./
function global(str){//retourne le resultat facilement..///
    return [ggend()[0](str),ggend()[1](str)];}
console.log(global("NOPQR"));//VOILA.
//avec ca on formeune procedure qui sen fiche visiblement de key
//et retourne les 2 valeurs issues de f1(),f2()*** en retour 
//avec seul argument str (+++()///) et f1,f2 sont des retours 
//dune fonction avant qui les extraient suivant un protocole POO.!/////.();//.

//si ggend en est la reponse=>ggend_encap(str) car dedans ggend key est connu.
//invisibilite pour la fonction mere=>a linterieur pas de const block grand|.//
function ggend2(){
function l(){
    const key=5;
    let o44=ggg(key);
    let e111=o44.cd011;
    let e222=o44.cd0233;
    function fenc(str){return e111(str);}
    function fdec(str){return e222(str);}
    return [fenc,fdec];}
    return l();}

let str="NOPQR";
console.log(ggend2()[0](str),ggend2()[1](str));
//ca marche avec ggend2() pour elle key est invisible car en tt 
//dans des parties hors le block l() key nest pas pas connu.(+++.//)









