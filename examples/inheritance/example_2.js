class A {
    constructor() {
        this.method = () => console.log('method from A');
    }
}

class B extends A {
    constructor() { super(); }
    method() { console.log('method from B'); }
}

const b = new B();
b.method();
