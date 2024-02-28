int maxProfit(int* prices, int pricesSize) {
    int profit=0;
    int curr_price=INT_MAX;
    for(int i = 0 ; i< pricesSize ; i++){
        if(prices[i]<curr_price){
            curr_price=prices[i];
        }else if(prices[i]-curr_price>profit){
            profit=prices[i]-curr_price;
    }
    }
    return profit;
}