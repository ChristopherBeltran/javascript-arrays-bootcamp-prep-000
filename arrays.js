var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
function addElementToBeginningOfArray (arrayName, newElement) {
  [newElement, ...arrayName];
  return arrayName;
}

function destructivelyAddElementToBeginningOfArray (theArray, newElement) {
  theArray.unshift(newElement);
  return theArray;
}

function addElementToEndOfArray (otherArray, endElement) {
  [...otherArray, endElement];
  return otherArray;
}

function destructivelyAddElementToEndOfArray (lastArray, lastElement) {
  lastArray.push(lastElement);
  return lastArray;
}

function accessElementInArray () {
  
}