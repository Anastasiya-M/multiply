module.exports = function multiply(first, second) {
    first = BigInt(first);
    second = BigInt(second);
    return "" + first*second;
}
