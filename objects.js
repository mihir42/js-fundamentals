let person = {
    name: "Mihir",
    age: 18,
    isLearning: true,
    city: "Udaipur"
}

console.log(person.name)
console.log(person.age)
console.log(person["isLearning"])
console.log(person.city)

person.car = "BMW"
console.log(person.car)

person.greet = function() {
    return "Hi!, I am " + this.name
}
console.log(person.greet())