Array.prototype.uniq = function() {
  let uniques = [];
  this.forEach((el) => 
    {
      if (!uniques.includes(el)) {
        uniques.push(el);
      }
    }
  );
  return uniques;
};

Array.prototype.twoSum = function() {
 let pairs = [];
 let i = 0;
 let j = 1;

  while (i < this.length && j < this.length)  {
    if ((this[i] + this[j])===0) {
      let pair = [i, j];
      pairs.push(pair);
    }
    if (j === (this.length - 1)) {
      if (i === j) {
        break;
      }
      i += 1;
      j = i + 1;
      continue;
    }
    j += 1;
  }
  return pairs;
};

Array.prototype.transpose = function() {
  let newArr = [];
  let i = 0;
  let j = 0;
  for (p = 0; p < this[0].length; p++) {
    newArr.push([]);
  }
  while (i < this.length) {
    while (j < this[0].length) {
      newArr[j][i] = this[i][j];
      j += 1;
    }
    j = 0;
    i += 1;
  }
  return newArr;
};


