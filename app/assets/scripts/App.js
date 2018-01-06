function Person(fullName, favColour) {
    this.name = fullName;
    this.favouriteColour = favColour;
    this.greet = function() {
        console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.favouriteColour);
    }
}

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();