// Add your Circle class here

//Diameter = radius • 2
//Circumference = π • diameter
//Area = π • radius2


class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2
    }

    get circumference() {
        return this.diameter * Math.PI
    }

    set circumference(circumference) {
        this.radius = circumference / (Math.PI * 2)
    }

    get area() {
        return Math.PI * (this.radius * this.radius)
    }

    set area(radius) {
        this.area = Math.PI * (radius * radius)
    }



}