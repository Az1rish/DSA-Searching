function maxProfit(prices) {
    let container = [];
    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - prices[i - 1];
        container.push(profit);
    }
    let max = Math.max(...container);
    return `The maximum profit for a one day trade is ${max}`;
}

console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));