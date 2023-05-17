let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.search("not");
let wordBad = sentence.search("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let result = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(result);
} else {
  console.log(sentence);
}