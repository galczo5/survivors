function outer() {
    this.x = 'value';

    function inner() {
        console.log(this.x);
    }

    inner();
}

outer();
