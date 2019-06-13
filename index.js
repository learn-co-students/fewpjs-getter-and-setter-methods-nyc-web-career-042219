// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  get diameter() {
    return this.radius*2
  }

  get circumference() {
    return Math.PI * this.diameter
  }

  get area() {
    return (this.radius * this.radius) * Math.PI
  }

  set diameter(n) {
    return this.radius = n / 2
  }

  set circumference(n) {
    return this.diameter = n / Math.PI
  }

  set area(n) {
    return this.radius = Math.sqrt(n / 2)
  }

}
