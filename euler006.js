// 8/30/17

function euler6(arg) {
    var sumOfSquare = 0;
    var squareOfSums = 0;
    let answer = 0;

    for (var i = 1; i <= arg; i++) {
        sumOfSquare = sumOfSquare + i ** 2;
    }

    for (var j = 1; j <= arg; j++) {
        squareOfSums = squareOfSums + j;
        if (j === arg) {
            squareOfSums = squareOfSums ** 2
        }
    }
    answer = squareOfSums - sumOfSquare;
    return answer
}