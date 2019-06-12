class Circle {
	constructor(radius){
		this.radius = radius;
	}

	get diameter(){
		return this._diameter = this.radius * 2;
	}

	set diameter(num){
		this.radius = num/2;
		return this._diameter = num;
	}

	get circumference(){
		return this._circumference = this.diameter * Math.PI;
	}

	set circumference(num){
		this.radius = num / (2 * Math.PI);
		return this._circumference = num;
	}

	get area(){
		return this._area = Math.PI * (this.radius ** 2);
	}

	set area(num){
		this.radius = Math.sqrt(num)/Math.PI;
		return this._area = num;
	}
}