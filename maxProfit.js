function maxProfit(arr){
    var maxProfit = arr[1] - arr[0];
    for(var i = 1; i < arr.length; i++){
        for(var j = i - 1; j >= 0; j--){
            if (maxProfit < (arr[i] - arr[i-j])){
                maxProfit = arr[i] - arr[i-j];
            }
        }

    }
    return maxProfit;
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11, 100]));