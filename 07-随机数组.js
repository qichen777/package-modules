function randomArr(arr) {
  const newArr = [...arr];
  newArr.sort( (a, b) => {
    return Math.random() -0.5;
  })
  return newArr;
}

console.log(randomArr([1,2,3,4,5]));