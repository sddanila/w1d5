var list = [];

function listing(num){
    list.push(num);
}

function mySortFunc(a, b){
    return a - b;
}

function returnSort(){
    return list.sort(mySortFunc);
}


exports.listing = listing;
exports.returnSort = returnSort;