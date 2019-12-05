function sum(a,b){
    return a + b;
}
module.exports = sum;

export const total = (shipping, total) => {
    return '$'+ sum(shipping,total);
}