class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2;
    }

    get circumference() {
        return this.diameter * Math.PI;
    }

    get area() {
        return (this.radius * this.radius) * Math.PI;
    }

    set diameter(n) {
        this.radius = n / 2;
    }

    set circumference(n) {
        this.diameter = n / Math.PI;
    }

    set area(n) {
        this.radius = Math.sqrt(n / 2)
    }
}