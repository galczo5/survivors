class Release {
    constructor() {
        this.print = () => {
            console.log('There will be no delays from now');
        };
    }
}

class DelayedRelease extends Release {

    print() {
        console.log('This is last delay!');
    }
}

let release = new DelayedRelease();
release.print();
