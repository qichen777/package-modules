//map接受一个函数作为参数,并且返回一个新的数组
Array.prototype.myMap=function(fn){
    let arr=[]
   　for(var i = 0; i<this.length; i++){
        　arr.push(fn(this[i],i,this))     //调用传入的参数
    }
    return console.log(arr)
}
// 测试：
const arr = [1,2,3]
arr.myMap(item=>item*2)   //[2,4,6]
