function convert1(n){
    if(n==0) return "";
    if(n%2==0){//problemes pour les 2 blocs quand largument de convert est 0
//implique va sarreter a 0 donc retour de "" comme condition darret si n==0.
	return convert1(Math.floor(n/2))+"0";}
    if(n%2==1){
	return convert1(Math.floor(n/2))+"1";}}
function convert2(n,b){//b<=9.(& b!=2=>3<=b=<9.)./////
    if(n==0) return "";
    if(n%b==0){
	return convert2(Math.floor(n/b),b)+"0";}
if(n%b==1){
    return convert2(Math.floor(n/b),b)+"1";}
if(n%b==2){
    return convert2(Math.floor(n/b),b)+"2";}
if(n%b==3 && b>=4){
    return convert2(Math.floor(n/b),b)+"3";}
if(n%b==4 && b>=5){
    return convert2(Math.floor(n/b),b)+"4";}
if(n%b==5 && b>=6){
    return convert2(Math.floor(n/b),b)+"5";}
if(n%b==6 && b>=7){
    return convert2(Math.floor(n/b),b)+"6";}
if(n%b==7 && b>=8){
    return convert2(Math.floor(n/b),b)+"7";}
if(n%b==8 && b==9){
    return convert2(Math.floor(n/b),b)+"8";}}
console.log(convert1(666));
console.log(convert2(666,2));
    console.log(convert2(666,3));
function convert2_2(n,b){
    if(n==0) return "";//suite calcul de la conversion de floor(n/b)!=0.
    else return convert2_2(Math.floor(n/b),b)+n%b;}
console.log(convert2_2(666,3));
//nimporte quelle base.
console.log("*****************");
let stringgg='A';
console.log(stringgg.charCodeAt()===10+55);
console.log("*****************");
let stringhj="ABCDEFGHIJKLMNOPQRSTUVXWYZ";
    let i=0;
function donne(nbr){
    let nbr2=nbr-65;
    return stringhj.charAt(nbr2);}
function donne2(str,i){
    let agg=str.charCodeAt(i);
    return agg-55;}
console.log("*****************");
console.log(donne(70)==="F");
console.log("*****************");
console.log("*****************");
console.log("*****************");
function convert_gb35(n,b){
    if(n==0) return "";
    if(n%b<=9){return convert_gb35(Math.floor(n/b),b)+n%b;}
    if(n%b>9){
	
	return convert_gb35(Math.floor(n/b),b)+donne(n%b+55);}}
console.log(convert_gb35(666,16));
function unconvert_ggg(str,b,i){
    if(i===str.length) {return 0;}
    else{
	if ((str.charAt(i)).charCodeAt()>=65){
	    //console.log(donne2(str,i)*Math.pow(b,str.length-1-i));
	    return Math.pow(b,str.length-1-i)*(donne2(str,i))+unconvert_ggg(str,b,i+1);}
	else{
	    //console.log(str.charAt(i)*Math.pow(b,str.length-i-1));
	    return Math.pow(b,str.length -i-1)*str.charAt(i)+unconvert_ggg(str,b,i+1);}}}

/*let a="1";let b="9999";
console.log(a.charCodeAt(),b.charCodeAt());*/
console.log("TEST DE UNCONVERT:************************");
console.log(unconvert_ggg("29A",16,0));
console.log(unconvert_ggg("220200",3,0));
console.log(unconvert_ggg("1010011010",2,0));//VOILA!!!!!.//////
///////////////////////////////
