class Sum {
    public a: number;
    public b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }

    public Calculate(): number {
        return this.a + this.b;
    }
}

var sum = new Sum(3, 2);
console.log(sum.a + " + " + sum.b + " = " + sum.Calculate());

new Promise((resolve, reject) => {
    setTimeout(() => {
        var sum = new Sum(123456789, 987654321);
        resolve(sum.a + " + " + sum.b + " = " + sum.Calculate())
    }, 1000);
})
    .then(console.log)
    .catch(console.error)