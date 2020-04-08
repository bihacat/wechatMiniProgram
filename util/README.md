# util.js

目录

- [navigate](#navigate) 一行代码跳转页面
- [navigateWithParam](#navigateWithParam) 一行代码跳转页面
- [isIpx](#idIpx) 判断是不是iPhone X
- [Date.format](#Date.format) 格式化日期时间戳

<div id="navigate"></div>

### navigate()

一行代码跳转小程序页面，使用方法

**以这种方式跳转，wxml标签上必须带data-uri属性，否则无法跳转**
``` html 
<!--Page1.wxml-->
<!--uri:跳转页面路径，必须有，否则无法跳转-->
<!--data-key="value" key和value会携带到目标页面的options中-->
<view bind:tap="navigate" 
    data-uri="path/to/page2" 
    data-param1="yourParam1"
    data-param2="yourParam2">
    点击跳转
</view>
```

``` js
// Page1.js 跳转
import util from "../path/to/your/util";
Page({
    navigate: function(e) {
        util.navigate(e);
    }
})

// Page2.js 接收数据
Page({
    onLoad:function(options){
        console.log(options);// {param1: "yourParam1", param2: "yourParam2"}
    }
})
```

<div id="navigateWithParam"></div>

### navigateWithParam

navigate的扩展方法，js自定义参数跳转页面

**以这种方式跳转，参数中必须带uri，否则无法跳转**

``` html
<!--Page1.wxml-->
<view bind:tap="navigate">
    点击跳转
</view>
```

``` js
// Page1.js 跳转
import util from "../path/to/your/util";
Page({
    navigate: function(e) {
        util.navigateWithParam({
            uri: "path/to/page2", // 用于定位跳转页面路径，没有这个参数无法跳转
            param1: "yourParam1",
            param2: "yourParam2",
        })
    }
})

// Page2.js 接收数据
Page({
    onLoad:function(options){
        console.log(options);// {param1: "yourParam1", param2: "yourParam2"}
    }
})
```

<div id="isIpx"></div>

### isIpx()

判断是否是iPhone X

``` js
import util from "../path/to/your/util";
Page({
    onLoad: function(options){
        util.isIpx()//如果是iPhone X，则返回true，否则返回false
    }
})
```

<div id="Date.format"></div>

### Date.format()

格式化时间戳

``` js
import util from "../path/to/your/util";
Page({
    onLoad: function(options) {
        let dateString = new Date().format("yyyy-MM-dd hh:mm:ss");
        console.log(dateString); // 2020-04-08 17:56:05
    }
})
```