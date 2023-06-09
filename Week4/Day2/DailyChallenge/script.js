function createWordFrame() {
    var input = prompt("Enter several words separated by commas:");
    var words = input.split(",").map(function (word) {
      return word.trim();
    });
  
    var maxLength = 0;
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    var frame = "*".repeat(maxLength + 4);
  
    console.log(frame);
    for (var j = 0; j < words.length; j++) {
      var wordLine = "* " + words[j] + " ".repeat(maxLength - words[j].length) + " *";
      console.log(wordLine);
    }
    console.log(frame);
  }
  
  createWordFrame();