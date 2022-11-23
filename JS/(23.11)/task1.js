class Vehicle{
    constructor(fuel, wheelCount, landOrAir){
        this.fuel = fuel
        this.wheelCount = wheelCount
        this.landOrAir = landOrAir
    }    
}
class Car extends Vehicle{
    constructor(model, country, fuel, wheelCount, landOrAir){
        super(fuel, wheelCount, landOrAir)
        this.model = model
        this.country = country
    }
}
class Plane extends Vehicle{
    constructor(model, country, fuel, wheelCount, landOrAir){
        super(fuel, wheelCount, landOrAir)
        this.model = model
        this.country = country
    }
}
let New = new Plane("x", "y", "a", "b", "c")

console.log(New)