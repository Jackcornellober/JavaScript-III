/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game`
}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(characterAttributes) {
  GameObject.call(this, characterAttributes);
  this.healthPoints = characterAttributes.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`
}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
function Humanoid(humanAttributes) {
  CharacterStats.call(this,humanAttributes);
  this.team = humanAttributes.team;
  this.weapons = humanAttributes.weapons;
  this.language = humanAttributes.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

// function Villain(villainAttributes) {
//   Humanoid.call(this,villainAttributes);
// }

// Villain.prototype = Object.create(Humanoid.prototype);

// Villain.prototype.nightmarePulse = function(target) {
//   target.healthPoints -=250;
//   target.takeDamage();
//   console.log(`${this.name} conjured a nightmare pulse! ${target.name} took 250 damage down to ${target.healthPoints}.`,`\n`)
//   if (target.healthPoints <= 0) {
//     console.log (`${target.name} is dead.`,`\n`)
//   }
// }

// function Hero(heroAttributes) {
//   Humanoid.call(this,heroAttributes);
// }

// Hero.prototype = Object.create(Humanoid.prototype);

// Hero.prototype.piercingLight = function(target) {
//   target.healthPoints -=200;
//   target.takeDamage();
//   console.log(`${this.name} called upon the piercing light! ${target.name} took 200 damage down to ${target.healthPoints}.`,`\n`)
//   if (target.healthPoints <= 0) {
//     console.log (`${target.name} is dead.`,`\n`)
//   }
// }

// Hero.prototype.stanosBlessing = function() {
//   this.healthPoints +=600;
//   console.log(`${this.name} has prayed for Stanos' Blessing! They've recovered 600 health points up to ${this.healthPoints}!`,`\n`)
// }

//   const priestOfDarkness = new Villain({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 2,
//       height: 5,
//     },
//     healthPoints: 1000,
//     name: 'Sterix',
//     team: 'The Hellspawn',
//     weapons: [
//       'Scepter of Qizzix'
//     ],
//     language: `Ish'Nir`,
//   });

//   const paladinOfTheLight = new Hero({
//     createdAt: new Date(),
//     dimensions: {
//       length: 1,
//       width: 3,
//       height: 6,
//     },
//     healthPoints: 1000,
//     name: 'Gendrick',
//     team: 'Servants of the Light',
//     weapons: [
//       'Arclight Warhammer'
//     ],
//     language: `Common`,
//   });


// //******************BATTLE***********************


//   console.log(`Gendrick, Servant of the Light enters the Crypt of the Damned and finds that Sterix, Priest of the Hellspawn has been awaiting his arrival.`,`\n`)
//   console.log(`${paladinOfTheLight.name}: This ends today.`,`\n`)
//   console.log(`${priestOfDarkness.name}: Darkness will consume all.`,`\n`)

//   priestOfDarkness.nightmarePulse(paladinOfTheLight);
//   paladinOfTheLight.piercingLight(priestOfDarkness);
  
//   priestOfDarkness.nightmarePulse(paladinOfTheLight);
//   paladinOfTheLight.piercingLight(priestOfDarkness);
  
//   priestOfDarkness.nightmarePulse(paladinOfTheLight);

//   console.log(`${priestOfDarkness.name}: AHAHAHA, you're finished now, human.`,`\n`)

//   paladinOfTheLight.stanosBlessing();

//   console.log(`${priestOfDarkness.name}: NOOOOOOOOOOO!`,`\n`)

//   paladinOfTheLight.piercingLight(priestOfDarkness);
//   priestOfDarkness.nightmarePulse(paladinOfTheLight);
//   paladinOfTheLight.piercingLight(priestOfDarkness);
//   priestOfDarkness.nightmarePulse(paladinOfTheLight);
//   paladinOfTheLight.piercingLight(priestOfDarkness);
