function generateStory() {
  // User Prompts
  let adjective = prompt("Enter an adjective for a day:");
  let name = prompt("Enter a name:");
  if (
    name === "Joe" ||
    name === "Joey" ||
    name === "joe" ||
    name === "joey" ||
    name === "Joseph" ||
    name === "joseph"
  ) {
    name =
      "THE VERY INSANELY SLOW (both mentally and physically), JOSEPH FRIEDMAN";
  } else if (name === "James" || name === "james") {
    name = "THE VERY INSANELY STUPID JAMES CARMICHAEL";
  } else {
    name = name;
  }

  // Variables
  let place = prompt("Enter a place:");
  let object = prompt("Enter an object:");
  let food = prompt("Enter a food:");
  let typeOfTerrain = prompt("Enter a type of terrain:");
  let animal = prompt("Enter an animal:");
  let adjective2 = prompt("Enter another adjective:");
  let verb_ing = prompt("Enter a verb ending in -ing:");
  let object2 = prompt("Enter another object:");
  let magicalAbility = prompt("Enter a magical ability:");
  let myStory1 = `It was a ${adjective} day when ${name} decided to embark on an adventure to the ${place}.`;
  let myStory2 = `Armed with a ${object} in one hand and a ${food} in the other, they felt ready for anything!`;
  let myStory3 = `As they journeyed through the ${typeOfTerrain}, they encountered a ${animal} that looked ${adjective2}.`;
  let myStory4 = `Without warning, the animal started ${verb_ing}, which startled ${name}.`;
  let myStory5 = `Determined to continue, ${name} bravely pressed forward until they stumbled upon a ${object2} lying in the middle of the path.`;
  let myStory6 = `"What in the world is this?" they thought, picking it up. Little did they know, this object held the power to ${magicalAbility}, leading to the most unforgettable adventure of their life!`;
  
  // Adding to HTML
  document.getElementById("story1").innerHTML = myStory1;
  document.getElementById("story2").innerHTML = myStory2;
  document.getElementById("story3").innerHTML = myStory3;
  document.getElementById("story4").innerHTML = myStory4;
  document.getElementById("story5").innerHTML = myStory5;
  document.getElementById("story6").innerHTML = myStory6;

  story1.classList.add('story-text', 'display-5', 'text-white', 'border', 'border-2', 'border-white', 'd-flex', 'align-items-center', 'justify-content-center', 'text-center');
  story2.classList.add('story-text', 'display-5', 'text-white', 'border', 'border-2', 'border-white', 'd-flex', 'align-items-center', 'justify-content-center', 'text-center');
  story3.classList.add('story-text', 'display-5', 'text-white', 'border', 'border-2', 'border-white', 'd-flex', 'align-items-center', 'justify-content-center', 'text-center');
  story4.classList.add('story-text', 'display-5', 'text-white', 'border', 'border-2', 'border-white', 'd-flex', 'align-items-center', 'justify-content-center', 'text-center');
  story5.classList.add('story-text', 'display-5', 'text-white', 'border', 'border-2', 'border-white', 'd-flex', 'align-items-center', 'justify-content-center', 'text-center');
  story6.classList.add('story-text', 'display-5', 'text-white', 'border', 'border-2', 'border-white', 'd-flex', 'align-items-center', 'justify-content-center', 'text-center');

  document.getElementById('row1').classList.remove('hidden');
  document.getElementById('row2').classList.remove('hidden');
  document.getElementById('row3').classList.remove('hidden');
  document.getElementById('row4').classList.remove('hidden');
  document.getElementById('row5').classList.remove('hidden');
  document.getElementById('row6').classList.remove('hidden');
  document.getElementById('footer').classList.remove('hidden');
}
