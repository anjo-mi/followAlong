const factorial = n => {
    if (n <= 1) return 1;
    console.log(n)
    return n * factorial(n-1)
}

console.log(factorial(8))

const memoFactorial = () => {
    const cache = {};
    function fact(n){
        if (n <= 1) return 1;
        if (cache[n]) return cache[n];
        const result = n * (cache[n-1] || fact(n-1));
        cache[n] = result;
        return result;
    }
    return fact;
}

const fact = memoFactorial();

console.log(fact(6))
console.log(fact(7))

const memoFib = () => {
    const cache = {};
    function f(n){
        if (n <= 1) return n;
        if (cache[n]) return cache[n];
        const result = (cache[n-1] || f(n-1)) + (cache[n-2] || f(n-2));
        cache[n] = result;
        return result;
    }
    return f;
}

const fib = memoFib()
console.log(fib(7))
console.log(fib(6))
