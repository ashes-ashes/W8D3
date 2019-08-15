function range(start, end) {
  if (start === end) {
    return [start];
  }
  return [start].concat(range(start+1, end));
}

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let el = arr.shift();
  return el + sumRec(arr);
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base*exponent(base, exp-1)
}

function fibonacci(n) {
  if (n === 0) {
    return [];
  }
  if (n===1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }
  let prev = fibonacci(n-1);
  let el = (prev[prev.length-1] + prev[prev.length-2]);
  return fibonacci(n-1).concat([el]);
}

function deepDup(arr) {
  if (!(arr instanceof Array)) {
    return arr;
  }
  let newArr = [];
  arr.forEach ( (el) => 
  {if (!(el instanceof Array)) {
    newArr.push(el);
  } else {
    newArr.push(deepDup(el));
  }});
  return newArr;
}

function bsearch(arr,target) {
  if (arr.length === 1) {
    if (arr[0] === target) {
      return 0;
    } else {
      return -1;
    } 
  } 
  
    if (arr.length === 0) {
      return -1;
    }
    debugger
  let pivot = Math.round((arr.length / 2) - 0.5);
  if (arr[pivot] === target) {
    return pivot;
  }
  if (arr[pivot] > target) {
    return bsearch(arr.slice(0, pivot), target);
  }
  if (arr[pivot] < target) {
    if (bsearch(arr.slice(pivot + 1))===-1) {
      return -1;
    } else {
    return pivot+bsearch(arr.slice(pivot+1), target)+1;
    }
  }
}