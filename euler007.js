// 10/30/17 euler 7

function euler7(arg) {
    var j = 2;
    var answer = 0;
    var scratch = 0;
    var counter = 1;

    while (counter <= arg) {
        if (isPrime(j) === true) {
            counter++;
            j++;
        } else {
            j++;
        }
    }
    console.log("Counter = " + counter)
    console.log("J = " + (j - 1))
}



function isPrime(x) {
    let i = 2;
    while (i <= Math.sqrt(x)) {
        if (x % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}