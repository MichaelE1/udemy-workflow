class Person {
    constructor(fullName, favColour) {
        this.name = fullName;
        this.favouriteColour = favColour;
    }

    greet() {
        console.log("Hi there, my name is " + this.name + " and my favourite colour is " + this.favouriteColour);
    }
}

export default Person;