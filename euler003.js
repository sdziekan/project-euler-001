//8/28/17 - Euler 3 kata

function euler3(num) {

    function plb3(n) {

        for (var i = 2; i < n / 2; i += 1) {
            if (isPrime(i) && n % i === 0) {
                var j = n;
                while (!isPrime(j) && j % i === 0) {
                    j = j / i;
                }
                return isPrime(j) ? j : plb3(j);
            }
        }
    }

    function isPrime(x) {
        let i = 2;
        while (i <= x / 2) {
            if (x % i === 0) {
                return false;
            }
            i++;
        }
        return true;
    }