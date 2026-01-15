function groupAnagrams(strs: string[]): string[][] {
    const map = new Map<string,string[]>
    for ( const str of strs){
        const key = str.split('').sort().join('')
        if(map.has(key)){
            const value = map.get(key)
            value.push(str)
            console.log("value",value)
        }else{
            map.set(key,[str])
        } 
    }
    console.log(map.values())
    
    return Array.from(map.values())
};