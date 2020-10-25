// 1
function pow(x) { return x * x; }

new Array(10000)
    .forEach((_, index) => {
        pow(index);
    });

// 2
new Array(10000)
    .forEach((_, index) => {
        function pow(x) { return x * x; }
        pow(index);
    });
