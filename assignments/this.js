/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global object binding references the global object (the current webpage/window)
* 2. references the object before the dot in "object.function"
* 3. "new" binding references each "new" instance of a prototype.
* 4. Explicit binding is when you explicitly say where you want "this" to refer to using the first parameter in the .call or .apply function
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function windowHello() {
    console.log("Hello!")
}

// this.windowHello();

windowHello();



// Principle 2

// code example for Implicit Binding

const person = {
    food: 'sandwich',
    //eat: (name) => {
    //    console.log(`${name} just ate a ${this.food}`);
    //    console.log(this)}
    eat: function(name) {
        console.log(`${name} just ate a ${this.food}`);
        console.log(this)
    }
}

person.eat('jack')

// Principle 3

// code example for New Binding

function Champion(champ) {
    this.champ = champ;
    this.penta = `has scored a PENTAKILL`;
    this.getPenta = function() {
        console.log(`${this.champ} ${this.penta}`);
        console.log(this);
    }
}

const akali = new Champion('akali')
const graves = new Champion('graves')


console.log(akali.penta)

akali.getPenta();
graves.getPenta();
// Principle 4

// code example for Explicit Binding

gotPenta = function() {
    console.log(`${this.champ} ${this.penta}`);
    console.log(this);
}

function Chimpion(champ) {
    this.champ = champ;
    this.penta = `has scored a PENTAKILL`;
    this.gotPenta = gotPenta
   }

const shaco = new Chimpion('shaco')

const testPenta = shaco.gotPenta

//shaco.gotPenta()

//akali.getPenta()

gotPenta.call(shaco)


