<<<<<<< HEAD
function myNew(fn, ...args) {
=======
function myNew (fn, ...args) {
>>>>>>> chen
  let instance = Object.create(fn.prototype);
  let result = fn.call(instance, ...args)
  return typeof result === 'object' ? result : instance;
}
<<<<<<< HEAD
=======
// 创建一个新的对象
// prototype 连接
// 新对象被绑定到函数调用的this
// 如果函数没有返回其他对象,那么new表达式中的函数就会自动返回这个新对象
>>>>>>> chen
