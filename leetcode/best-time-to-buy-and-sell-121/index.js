// This solution was only looking for the lowest day to buy, so it was failing on the test case of [2, 4, 1]

// const maxProfit = function (prices) {
//   const bestDayToBuy = Math.min(...prices);

//   // const lowestIndex = prices.indexOf(bestDayToBuy);
//   // const restOfArray = prices.slice(lowestIndex + 1)
//   const restOfArray = prices.slice(prices.indexOf(bestDayToBuy) + 1);
//   let bestDayToSell = 0;
//   if (restOfArray.length > 0) {
//     bestDayToSell = Math.max(...restOfArray);
//     if (bestDayToSell > bestDayToBuy) {
//       return bestDayToSell - bestDayToBuy;
//     } else {
//       return 0;
//     }
//   }
//   return 0;

// };

var maxProfit = function(prices) {
    // account for array only having 1 entry = zero profit possible
    
    if (prices.length > 0) {
        let bestDayToBuy =  prices[0];
        let profit = 0;
        console.log(bestDayToBuy)
            for(let i = 1; i < prices.length; i++) {
                if (prices[i] < bestDayToBuy) {
                    bestDayToBuy = prices[i]
                    console.log(bestDayToBuy)
                }
                profit = Math.max(profit, prices[i] - bestDayToBuy)
            }
            return profit
    }
    return profit
   
};

// console.log(maxProfit([7,1,5,3,6,4])); // 5
// console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([2, 4, 1])); // 0

// buy on smallest number in array
// sell on largest number after that in array
// if no larger number, return 0

// 1 find smallest number in array
// 2  identify is there a larger number after that?
