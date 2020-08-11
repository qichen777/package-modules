const $ = {
  // {name:'jack',age:20} >> name=jack&age=20
  getdata:function(obj){
      let params = ''
      // .....遍历
      for(key in obj){
          params = params + key + "=" + obj[key] + "&"
      }
      return params.slice(0,-1)
  },
  // 请求方式 options.type
  // 请求url: options.url
  // 请求参数:options.data,暂且约定参数的格式：key=value&key=value
  // 响应成功之后的回调函数:options.success
  // 响应的数据类型：options.dataType,支持的类型有：json,xml,text/html
  // 对象做为参数，我们希望达到这样的效果
  // 1.如果没有传递某些参数，参数应该有默认值，处理一样的完成
  // 2.参数的数量任意，我们得根据所传递的参数分别进行处理
  ajax:function(options){
      let data // 这是我要的参数
      if(options.data){ // 说明传递了参数
          if(typeof options.data == 'object'){ // 类型判断
              // 转换对象为字符串
              data = this.getdata(options.data)
          }else{
              data = options.data
          }
      }else{ // 没有传递参数
          data = ''
      }

      // 异步对象发送请求和接收响应
      // 1.接收参数，并对参数进行默认值的处理
      let type = options.type || 'get'
      // location.pathname:当前页面的路径，意味着如果用户没有传递url,默认就让当前页进行处理
      let url = options.url || location.pathname
      // let data = options.data || ''
      let success = options.success
      let dataType = options.dataType

      // 2.创建异步对象
      let xhr = new XMLHttpRequest()

      // 3.让异步对象发送请求
      // 3.1 设置请求行
      // get方式的请求如果有参数，需要在url拼接参数
      if(type.toLowerCase() == 'get'){
          url = url + "?" + data
          data = null
      }
      xhr.open(type,url)
      // 3.2 设置请求头,只有post方式需要设置请求头Content-Type
      if(type.toLowerCase() == 'post'){
          xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
      }
      // 3.设置请求体，get没有请求体，post方式如果有参数就需要在请求体中传递
      xhr.send(data)
      
      // 4.让异步对象接收响应
      xhr.onload = function(){
          // json:转换为js对象
          // xml:转换xml文档
          let result
          if(dataType == 'json'){
              result = JSON.parse(xhr.response)
          }else if(dataType == 'xml'){
              result = xhr.responseXML
          }else{
              result = xhr.response
          }
          // 调用用户传入的回调函数
          success && success(result)
      }
  }
}