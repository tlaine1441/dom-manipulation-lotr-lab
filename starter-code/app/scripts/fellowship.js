console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


//
//
//    I did a thing with traversing querySelectors
//
//

// Part 1


function makeMiddleEarth() {
  // create a section tag with an id of middle-earth
  var sectionElement = document.createElement('section');
  for(var i=0; i < lands.length; i++) {
    // inside, add each land as an article tag
    var articleElement = document.createElement('article');

    // inside each article tag include an h1 with the name of the lands
    var h1Element = document.createElement('h1');
    h1Element.innerHTML = lands[i];
    articleElement.appendChild(h1Element);
    sectionElement.appendChild(articleElement);
  }

  // append middle-earth to your document body
  body.appendChild(sectionElement);
}
makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var ulElement = document.createElement('ul');
  for(var i=0; i < hobbits.length; i++) {
    var liElement = document.createElement('li');
    // give each hobbit a class of hobbit
    liElement.className = 'hobbits';
    liElement.innerHTML = hobbits[i];
    ulElement.appendChild(liElement);
  }
  var theShire = document.querySelector('article');
  theShire.appendChild(ulElement);
}
makeHobbits();
// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  var divElement = document.createElement('div');
  // give the div a class of 'magic-imbued-jewelry'
  divElement.className = 'magic-imbued-jewelry';
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  divElement.addEventListener("click", function() {
    nazgulScreech();
  });
  // add the ring as a child of Frodo
  var frodo = document.querySelectorAll("article")[0].querySelector("li");
  frodo.appendChild(divElement);
}
keepItSecretKeepItSafe();

// Part 4

function makeBuddies() {
  // create an aside tag
  var asideElement = document.createElement('aside');
   // attach an unordered list of the 'buddies' in the aside
  var ulElement = document.createElement('ul');
  for(var i=0; i < buddies.length; i++) {
    var liElement = document.createElement('li');
    liElement.innerHTML = buddies[i];
    ulElement.appendChild(liElement);
  }
  asideElement.appendChild(ulElement);
  // insert your aside as a child element of rivendell
  var rivendell = document.querySelectorAll('article')[1];
  rivendell.appendChild(asideElement);
}
makeBuddies();

// Part 5

function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var textNode = document.querySelectorAll('article')[1].querySelectorAll('li')[3];
  textNode.innerHTML = 'Aragorn';
}
beautifulStranger();

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var articleElement = document.querySelector('article');
  var hobbits = document.querySelectorAll('article')[0].querySelector('ul');
  articleElement.removeChild(hobbits);
  var rivendell = document.querySelectorAll('article')[1];
  rivendell.appendChild(hobbits);
 }
leaveTheShire();


// Part 7


  function forgeTheFellowShip() {
    // create a new div called 'the-fellowship' within rivendell
    var theFellowship = document.createElement('div');
    var ulElement = document.createElement('ul');
    // add each hobbit and buddy one at a time to 'the-fellowship'
    var characters = document.querySelectorAll('li');
    for (var i=0; i < characters.length; i++) {
      characters[i].className = "character";
      ulElement.appendChild(characters[i]);
      // after each character is added make an alert that they have joined your party
      alert(characters[i].textContent + " was added to The Fellowship");
    }
    theFellowship.appendChild(ulElement);
    var rivendell = document.querySelectorAll('article')[1];
    rivendell.appendChild(theFellowship);
  }
  forgeTheFellowShip();


// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  var gandalf = document.querySelectorAll('.character')[0];
  gandalf.textContent = 'Gandalf the White';
  // apply style to the element
  // make the background 'white', add a grey border
  gandalf.style.background = 'white';
  gandalf.style.border = '3px solid grey';
}
theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
