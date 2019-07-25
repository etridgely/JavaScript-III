/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*  
* 'This' allows programmers to reference different objects depending on the binding. 
*
* 1. Window or Global Object Binding - the value of this will be in the global scope
* 2. Implicit Binding - the value will be referring to an object left of preceding dot within the same function
* 3. New Binding - the value refers to a specific instance of a new object that is created and returned by a constructor function
* 4. Explicit Binding - the value is explicitly defined and overrides old values through either call or apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function helloGoodbye(beatles) {
    console.log(this);
    return beatles;
}
helloGoodbye("George Harrison")

// Principle 2

// code example for Implicit Binding

const whiteAlbum = {
    animal: 'walrus',
    lyrics: function(name) {
        console.log(`Well here's another clue for you all: The ${this.animal} was ${name}.`);
        console.log(this);
    }
}

whiteAlbum.lyrics('Paul');


// Principle 3

// code example for New Binding

function BandMember (drummer){
    this.member = drummer;
}

let ringoStarr = new BandMember(`Ringo Starr is the Beatles' new drummer.`);

console.log(ringoStarr.member);

// Principle 4

// code example for Explicit Binding

function strawberryFields(){
    console.log(`${this.name} is a member of ${this.band}.`);
}

const lennon = {
    name: 'John Lennon',
    band: 'The Beatles'
}

strawberryFields.call(lennon);
