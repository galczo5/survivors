function test() {
    console.log(x, y, z);

    if (true) {
        var x = 1;
        let y = 2;
        const z = 3;
    }

    console.log(x, y, z);
}

test();
