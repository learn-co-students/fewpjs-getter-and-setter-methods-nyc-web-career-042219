// Add your Circle class here
class Circle{
  constructor(radius) {
    this.radius = radius
  }

  get diameter(){
    return 2 * this.radius
  }

  set diameter(newdia){
    this.radius = newdia/2
  }

  get circumference(){
    return 2* Math.PI*this.radius
  }

  get area(){
    return Math.PI*this.radius**2
  }

  set circumference(circumference){
    this.radius = circumference/2/Math.PI
  }

}
