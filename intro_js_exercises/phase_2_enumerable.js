Array.prototype.myEach = function(callback) {
  for (i = 0; i < this.length; i ++) {
    callback(this[i]);
  }
};


Array.prototype.myMap = function(callback) {
  let newArr = [];
  for (i = 0; i < this.length; i++) {
    let el = callback(this[i]);
    newArr.push(el);
  }
  return newArr;
};

Array.prototype.myReduce = function(callback, initialValue = 0) {
  let arr = this;
  let acc = initialValue;
  acc = acc || arr.shift();
  for (i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
};