// 1
setTimeout(() => console.log('Wake up Samurai'));
new Promise(resolve => {
    console.log('We have city tu burn');
    resolve();
});

// 2
new Promise(resolve => {
    console.log('Wake up Samurai');
    resolve();
});
setTimeout(() => console.log('We have city tu burn'));
