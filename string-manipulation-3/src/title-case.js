/* exported titleCase */
function titleCase(title) {
  var lowerCaseRule = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newTitle = '';
  var tempWord = '';
  var spaceFound = true;
  for (var i = 0; i < title.length; i++) {
    if (spaceFound) {
      tempWord += title[i].toUpperCase();
      spaceFound = false;
    } else {
      if (title[i] === ' ') {
        spaceFound = true;
        if (tempWord.toLowerCase() === 'javascript' || tempWord.toLowerCase() === 'javascript:') {
          if (tempWord.toLowerCase() === 'javascript') {
            newTitle += 'JavaScript';
          } else if (tempWord.toLowerCase() === 'javascript:') {
            newTitle += 'JavaScript:';
          }
        } else if (tempWord.toLowerCase() === 'api') {
          newTitle += 'API';
        } else if (lowerCaseRule.includes(tempWord.toLowerCase()) && newTitle.length !== 0 && newTitle[newTitle.length - 2] !== ':') {
          newTitle += tempWord.toLowerCase();
        } else {
          newTitle += tempWord;
        }
        newTitle += ' ';
        tempWord = '';
      } else {
        if (title[i - 1] === '-') {
          tempWord += title[i].toUpperCase();
        } else {
          tempWord += title[i].toLowerCase();
        }
      }
    }
  }
  if (tempWord.toLowerCase() === 'javascript' || tempWord.toLowerCase() === 'javascript:') {
    if (tempWord.toLowerCase() === 'javascript') {
      newTitle += 'JavaScript';
    } else if (tempWord.toLowerCase() === 'javascript:') {
      newTitle += 'JavaScript:';
    }
  } else if (tempWord.toLowerCase() === 'api') {
    newTitle += 'API';
  } else if (lowerCaseRule.includes(tempWord.toLowerCase()) && newTitle.length !== 0 && newTitle[newTitle.length - 2] !== ':') {
    newTitle += tempWord.toLowerCase();
  } else {
    newTitle += tempWord;
  }
  return newTitle;
}
