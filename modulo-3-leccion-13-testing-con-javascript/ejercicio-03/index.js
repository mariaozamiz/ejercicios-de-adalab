function paddingLeft(string, finalSize, paddingValue) {
    while (string.length < finalSize) {
        string = paddingValue + string;
    }
    return string;
}
module.exports = paddingLeft;
