Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (sorted === false) {
    sorted = true;
    for (i=0; i < (this.length - 1 ); i++) {
      if (this[i] > this[i+1]) {
        let a = this[i];
        let b = this[i+1];
        this[i] = b;
        this[i+1] = a;
        sorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let substrings = [];
  for (i=0; i < this.length; i ++) {
    for (j=i; j < this.length; j++) {
      substrings.push(this.slice(i,j+1));
    }
  }
  return substrings;
};