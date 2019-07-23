const adjectives = [
  "smart",
  "cool",
  "poetic",
  "beautiful",
  "talented",
  "sweet",
  "brilliant",
  "sassy", 
  "tricky",
  "naive",
  "coy"
]

const moreAdjectives = [
  "cunning",
  "pliable",
  "glowing",
  "powerful",
  "innocent",
  "noble",
  "pretty",
  "stupid hot",
  "opalescent",
  "perfect-faced",
  "rule-breaking",
  "sophisticated",
  "rainbow-infused"
]

const nouns = [
  "land-mermaid",
  "muskox",
  "tree shark",
  "sunflower",
  "space unicorn",
  "moth",
  "newborn baby",
  "sunfish",
  "minx",
  "tropical fish",
  "sun goddess",
  "mannequin come to life",
  "butterfly",
  "daffodil",
  "angelfish",
  "painted daisy",
  "teapot",
  "pixie",
  "sea fairy"
]

function randomCompliment(e) {
  let adj1 = randomWord(adjectives);
  let adj2 = randomWord(moreAdjectives);
  let noun = randomWord(nouns);
  injectHTML(adj1, "adjective1");
  injectHTML(adj2, "adjective2");
  injectHTML(noun, "noun");
}

function randomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function randomWord(wordArray) {
  const randIdx = randomIndex(wordArray.length);
  return wordArray[randIdx];
}

function injectHTML(word, boxID) {
  let box = document.getElementById(boxID);
  box.textContent = word;
}

