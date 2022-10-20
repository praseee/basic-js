// create an object
const motor = {
    merk: "vario",
    color: "Red",
    isExist: true
}
//show
console.log(motor);

// set propery value obj
motor.color = "black";

// add property obj
motor.fuel = "pertamax";

console.log(motor);

// delete property
delete motor.fuel

console.log(motor);