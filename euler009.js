function euler9(arg) {
    var d;
    var e;
    const square = x => Math.pow(x, 2);

    for (var a = 1; a < arg; a++) {
        for (var b = 2; b < arg; b++) {
            for (var c = 3; c < arg; c++) {

                if (a + b + c === 1000 && square(a) + square(b) === square(c)) {
                    console.log(a, b, c);
                    return a * b * c;
                }
            }
        }
    }
}