interface PublicCar {
  name: string,
  color: string,
  wheels: number,
  speed(): number,
}

const car = {
  name: 'BMW',
  color: 'black',
  wheels: 4,
  speed(): number {
    return this.wheels * 200;
  }
}

const myCar = (vehicle: PublicCar): void => {
  console.log(`My car is ${vehicle.name}, and it is ${vehicle.color}, also have ${vehicle.wheels} wheels, additionsally speed is ${vehicle.speed()}`)
}

myCar(car)