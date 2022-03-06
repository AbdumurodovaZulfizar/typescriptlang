var car = {
    name: 'BMW',
    color: 'black',
    wheels: 4,
    speed: function () {
        return this.wheels * 200;
    }
};
var myCar = function (vehicle) {
    console.log("My car is ".concat(vehicle.name, ", and it is ").concat(vehicle.color, ", also have ").concat(vehicle.wheels, " wheels, additionsally speed is ").concat(vehicle.speed()));
};
myCar(car);
