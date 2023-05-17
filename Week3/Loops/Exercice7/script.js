const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];


const firstLetters = [];
for (let i = 0; i < names.length; i++) {
  const firstLetter = names[i][0];
  firstLetters.push(firstLetter);
}

const sletters = firstLetters.sort();

const societyName = sletters.join('');

console.log(societyName);