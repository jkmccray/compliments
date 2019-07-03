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

const swearWords = [
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

const altSwears = [

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

function randomInsult(e) {
  let safe = e.target.classList.contains("safe"); //boolean
  let adj = randomWord(adjectives);
  let swr;
  if (safe) {
    swr = randomWord(altSwears);
  } else {
    swr = randomWord(swearWords);
  }
  let noun = randomWord(nouns);
  injectHTML(adj, "adjective");
  injectHTML(swr, "swear");
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

function useAltSwear() {
  let btn = document.getElementById("insult");
  btn.classList.toggle("safe");
}