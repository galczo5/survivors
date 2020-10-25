let fun = () => {
    console.log('in timeout')
};

setTimeout(fun , 0);

// Time of execution: 10000ms
new Array(1000000)
    .forEach(() => {
        console.log('in foreach');
    });
