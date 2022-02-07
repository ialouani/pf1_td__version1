function powerLinear(x,n){
    if (n==1) return x;
    else return x*powerLinear(x,n-1);}
function a4_v2_rtt(x,n,k){
    if(n==0) return k;
    else return a4_v2_rtt(x,n-1,k*x);}
function fff(x,n){
    if(n==0) return 1;
    if (n==1) return x;
    return fff(x,Math.floor(n/2))*fff(x,n-Math.floor(n/2));}
//version terminale voulant etre optimisee mais O(n) obtenu;il faut 
//encore plus optimiser.
function complex(x,n){
//x**n=(x**m)*x**(n-m+1)=(x**m)**{2 *x(1) 2.|(en0.)}.
    if(n==1) return x;
    if(n%2===0){
	return Math.pow(complex(x,n/2),2);}
    if(n%2===1){
	return complex(x,n+1)*(1/x);}}
console.log(powerLinear(3,21),Math.pow(3,21),a4_v2_rtt(3,21,1),fff(3,21));
console.log(complex(3,21));