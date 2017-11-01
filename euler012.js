// Project Euler 12 10/31/2017


function euler12(tri, j, arg) {

    var t0 = performance.now();

    for (j; ; j++) {
        tri += j;
        if (divisorsCount(tri) > arg) {
            break;
        }
    }

    var t1 = performance.now();
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
}

function divisorsCount(x) {
    let i = 1;
    var len = 0;

    while (i <= Math.sqrt(x)) {
        if (x % i === 0) {
            len = len + 2;
        }
        i++;
    }
    return len;
}

