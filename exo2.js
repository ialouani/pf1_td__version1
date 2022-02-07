function pgcd_rec(a,b){
    if(b==0) return a;
    else return pgcd_rec(b,a%b);}
function pgcd_iter(a,b){
    while(b!=0){
	let r=a%b;
	a=b;
	b=r;}
    return a;}
console.log(pgcd_rec(234,321),pgcd_iter(234,321));
console.log(pgcd_rec(23467,32157),pgcd_iter(23467,32157));
console.log(pgcd_rec(340,120),pgcd_iter(120,340));