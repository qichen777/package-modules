function deepClone(obj) {
  let objClone = Array.isArray(obj) ? [] : {}
  if (obj && typeof obj === 'object') {
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        //判断obj子元素是否为对象 如果是 递归复制
        if (obj[key] && typeof obj[key] === 'object') {
          objClone[key] = deepClone(obj[key])
        } else {
          objClone[key] = obj[key]
        }
      }
    }
  }
  return objClone;
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
let obj2 = deepClone(obj);

// 显示结果
obj2.name = 'qi';
obj2.friends.push('sun')
console.log(obj);
console.log(obj2);
