function maxProfit(prices: number[]): number {
    let minprice = Number.MAX_SAFE_INTEGER;
    let maxprofit = 0;

    for(let price of prices){
        if(price < minprice){
            minprice = price;
        }

        if(price - minprice > maxprofit){
            maxprofit = price - minprice
        }
    }
    return maxprofit;
    
};
