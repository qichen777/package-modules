function isObj(obj) {
  return (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)
}
// 解决 深拷贝中正则 日期对象无法拷贝的问题
function clone(obj, hash = new WeakMap()) {
  let tempobj, constructor
  constructor = obj.constructor
  switch (constructor) {
    case RegExp:
      tempobj = new constructor(obj)
      break;
    case Date:
      tempobj = new constructor(obj)
      break;
    default:
      if (hash.has(obj)) return hash.get(obj)
      tempobj = Array.isArray(obj) ? [] : {}
      hash.set(obj, tempobj)
  }
  for (let key in obj) {
    tempobj[key] = isObj(obj[key]) ? clone((obj[key]), hash) : obj[key]
  }
  return tempobj
}    




let obj = {
  name: 'chen',
  age: 20,
  friends: ['zhang', 'liu']
}

// Object.assign()  浅拷贝
// let obj2 = Object.assign(obj);

// ...浅拷贝
// let obj2 = {...obj};

// JSON.parse(JSON.stringify())  深拷贝
// let obj2 = JSON.parse(JSON.stringify(obj))

// 封装的深拷贝
let obj2 = clone(obj);

// 显示结果
obj2.name = 'qi';
obj2.friends.push('sun')
console.log(obj);
console.log(obj2);
