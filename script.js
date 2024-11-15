// User Prompts
let adjective = prompt('Enter an adjective for a day:')
let name = prompt('Enter a name:')
if (name === 'Joe' || name === 'Joey' || name === 'joe' || name === 'joey' || name === 'Joseph' || name === 'joseph') {
  name = 'THE VERY INSANELY SLOW (both mentally and physically), JOSEPH FRIEDMAN'
} else if (name === 'James' || name === 'james') {
  name = 'THE VERY INSANELY STUPID JAMES CARMICHAEL'
} else {
  name = name
}







let place = prompt('Enter a place:')
let object = prompt('Enter an object:')
let food = prompt('Enter a food:')
let typeOfTerrain = prompt('Enter a type of terrain:')
let animal = prompt('Enter an animal:')
let adjective2 = prompt('Enter another adjective:')
let verb_ing = prompt('Enter a verb ending in -ing:')
let object2 = prompt('Enter another object:')
let magicalAbility = prompt('Enter a magical ability:')
let myStory
myStory = `It was a ${adjective} day when ${name} decided to embark on an adventure to the ${place}. Armed with a ${object} in one hand and a ${food} in the other, they felt ready for anything! As they journeyed through the ${typeOfTerrain}, they encountered a ${animal} that looked ${adjective2}. Without warning, the animal started ${verb_ing}, which startled ${name}. Determined to continue, ${name} bravely pressed forward until they stumbled upon a ${object2} lying in the middle of the path. "What in the world is this?" they thought, picking it up. Little did they know, this object held the power to ${magicalAbility}, leading to the most unforgettable adventure of their life!`

// Adding to HTML
document.getElementById('story').innerHTML = myStory

