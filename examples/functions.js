function release() {
    this.info = 'Cyberpunk will be released December 10';

    function print() {
        console.log(this.info); // Will it print the info?
    }

    print();
}

new release();
