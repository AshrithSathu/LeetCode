function isAnagram(s: string, t: string): boolean {
    const map = new Map()

    if(s.length != t.length){
        return false
    }
    
    for(let i = 0 ; i <= s.length - 1 ; i ++){
        if(map.has(s[i])){
            let count = map.get(s[i]);
            map.set(s[i],count + 1)
        }else{
            map.set(s[i],1)
        }
    }
    for(let i = 0 ; i <= s.length - 1 ; i ++){
        const value = t[i]
        if (map.get(t[i]) > 0){
            let count = map.get(t[i]);
            map.set(t[i],count - 1)
        }else{
            return false;
        }
    }
    return true
    
    
};