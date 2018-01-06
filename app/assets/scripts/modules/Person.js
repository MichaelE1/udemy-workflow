function Person(fullName, favColour) {
    this.name = fullName;
    this.favouriteColour = favColour;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.favouriteColour);
    }
}

module.exports = Person;