const charval = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-count");

// Dictionary of common spelling mistakes and corrections
const corrections = {
  "teh": "the",
  "recieve": "receive",
  "definately": "definitely",
  "seperated": "separated",
  "occured": "occurred",
  "adress": "address",
  "alot": "a lot",
  "wierd": "weird",
  "thier": "their",
  "langauge": "language"
};

// Update character count on screen
const updateCounter = () => {
  const length = charval.value.length;
  totalCount.innerText = length;
  remainingCount.innerText = 150 - length;
};

// Advanced autocorrect function
const autoCorrect = () => {
  let text = charval.value;

  // Replace each incorrect word, keeping punctuation and case
  text = text.replace(/\b[\w']+\b/g, (word) => {
    const lower = word.toLowerCase();
    if (corrections[lower]) {
      // Preserve capitalization
      if (word[0] === word[0].toUpperCase()) {
        return corrections[lower][0].toUpperCase() + corrections[lower].slice(1);
      }
      return corrections[lower];
    }
    return word;
  });

  charval.value = text;
  updateCounter();
};

// Event listener for real-time counter
charval.addEventListener("keyup", updateCounter);

// Autocorrect button click
document.getElementById("autocorrect-btn").addEventListener("click", autoCorrect);
