// Euler 5 8/30/17
function euler5() {
    var isMultiple = false;
    var n = 0;
    var i = 1;

    while (i > 0) {

        n = i * 20;

        for (var j = 1; j <= 20; j++) {
            if (n % j === 0) {
                isMultiple = true;
            } else {
                isMultiple = false;
                break;
            }
        }
        i++;
        if (isMultiple === true) {
            break;
        }

    }
    return n;
}