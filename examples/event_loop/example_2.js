// 1
setTimeout(() => console.log('in timeout'));
new Promise(resolve => {
    console.log('in promise');
    resolve();
});

// 2
new Promise(resolve => {
    console.log('in promise');
    resolve();
});
setTimeout(() => console.log('in timeout'));
