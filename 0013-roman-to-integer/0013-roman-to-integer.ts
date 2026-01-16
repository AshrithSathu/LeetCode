function romanToInt(s: string): number {
    const map = new Map<string,number>([["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000],["IV",4],["IX",9],["XL",40],["XC",90],["CD",400],["CM",900]])
    let ans = 0;
    for(let i = s.length - 1 ; i >=0 ; i--){
        if(map.has(s.slice(i-1,i+1))){
            ans = ans + map.get(s.slice(i-1,i+1))
            i = i - 1;
        }else{
            ans = ans + map.get(s[i])
        }
    }
    return ans;
};