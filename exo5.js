function fx_00(n){
    if (n==0) return "pair";
    if (n==1) return "impair";
    return fx_00(fx_1(n));
}
function fx_1(n){
    if(n==0) return 0;
    if(n==1) return 1;
    if(n!=0 && n!=1) return (fx_1(n-1)+1)%2;}
function fx_2(n){
    if(n==0) return true;
    if(n==1) return false;
    else{
	return !fx_2(n-1);}}
function fxx(n){
    if(fx_2(n)==true) return "pair";
    else return "impair";}
function fx_v3(n){
    return (true && n==0) || (false && n==1) || (!fx_v3(n-1) && n>1); 
}  
function finalv3(n){
    let str="pair n ? => reponse:  ";
    return str+=fx_v3(n);}
console.log(fx_00(4),fx_00(7));
console.log(fxx(4),fxx(7));
console.log(fx_v3(4),fx_v3(7));
console.log(finalv3(4));
console.log(finalv3(7));