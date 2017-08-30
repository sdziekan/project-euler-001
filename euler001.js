//8 / 28 / 17 - Project Euler 1
function euler1(num1, num2, max) {
    var counter = 0;
    var i = 1
    while (i < max) {
        if (i % 15 === 0) {
            counter = counter + i
            i++
        } else if (i % 3 === 0) {
            counter = counter + i
            i++
        } else if (i % 5 === 0) {
            counter = counter + i
            i++
        } else {
            i++
        }
    }
    return counter
}