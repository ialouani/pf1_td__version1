function sum_rec(a,b){//b>=a forcement
    if(a==b) return a;
    return a+sum_rec(a+1,b);}
function sum_iter(a,b){
    if(a>b) return 0;
    let rslt=0;
    while(a<=b){
	rslt+=a;a++;}
    return rslt;}
function sum_v3(a,b){
    if(a>b) return 0;
    let ee1=sum_iter(1,b);
    let ee2=sum_rec(1,a-1);
    return ee1-ee2;}
console.log(sum_rec(3,9),sum_iter(3,9),sum_v3(3,9));
console.log(sum_rec(31,999),sum_iter(31,999),sum_v3(31,999));
console.log("******************");
function sum_squares(a,b){
    let rslt=0;
    while(a<=b){
	rslt+=Math.pow(a,2);a++;}
    return rslt;}
function appli2_recur(a,b){
    if (a==b) return Math.pow(a,2);
    else return Math.pow(a,2)+appli2_recur(a+1,b);}
function v3_square(a,b){
    return sum_squares(1,b)-sum_squares(1,a-1);}
console.log(sum_squares(1,5),appli2_recur(1,5),v3_square(1,5));

let f=function(x){return Math.pow(x,2);};
function sumGeneric(f,a,b){
    if(a==b) return f(a);
    else return f(a)+sumGeneric(f,a+1,b);}
console.log(sumGeneric(f,1,5));








