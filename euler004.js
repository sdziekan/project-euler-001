// 8/30/17 Project Euler 4
// start with 999 * 999, evaluate each product
// determine if product is a palindrome
// if not subtract 1 from one 3-digit number
// repeat until we are down to 1, then reset the number to 998

function euler4() {
    var input1 = 999;
    var input2 = 999;
    var product = 0;
    var maxPalindrome = 0;
    var pals = []

    while (true) {
        product = input1 * input2;

        if (isPalindrome(product) === true) {

            if (product >= maxPalindrome) {
                maxPalindrome = product
            }
        }

        if (input1 === 100 && input2 === 100) {
            break
        } else if (input2 >= 100) {
            input2 = input2 - 1;
        } else {
            input2 = 999;
            input1 = input1 - 1;
        }
    }
    return maxPalindrome
}

function isPalindrome(num) {
    var toStr = num.toString();
    var revStr = toStr.split("").reverse().join("");

    if (toStr !== revStr) {
        return false
    } else {
        return true
    }
}