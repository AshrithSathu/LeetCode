function kthGrammar(n: number, k: number): number {
    if(n==1){
        return 0;
    }
    let length = Math.pow(2,n-1);
    let half = Math.floor(length/2);
    if(k <= half ){
        return kthGrammar(n-1,k);
    }else{
        return 1 - kthGrammar(n-1,k-half);
    }
    return 0;
};