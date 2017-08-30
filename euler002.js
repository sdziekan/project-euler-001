//8/28/17 - Project Euler 2a
function euler2(max) {
    var arr = [2, 1]
    var answer = 0;

    while (arr[0] <= max) {
        arr.unshift(arr[0] + arr[1])
    }
    arr.shift();
    var evenArr = arr.map(function (x) {
        if (x % 2 === 1) {
            return 0
        } else { return x }
    })

    answer = evenArr.reduce(function (sum, value) {
        return sum + value;
    }, 0)

    return answer
}

//8/29/17 - Project Euler 2b
function euler2b(max) {
    var arr = [2, 1];
    var answer = 2;
    var element = 2
    while (element <= max) {
        if (element % 2 === 0) {
            answer = answer + element;
        }
        element = arr[0] + arr[1]
        arr.unshift(element)


    }
    return answer;
}

