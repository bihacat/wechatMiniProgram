```
common.wxss: 部分常用小程序样式
fit-ipx: 小程序适配iPhone X底部safe area
stepper: 小程序步进器
util.js: 工具类
```

[util](#util)
[search-holder](#search-holder)
[search-bar](#search-bar)

<div id="util"></div>
# util.js 
[navigate:一行代码跳转路由](https://www.bihacat.com/detail/18)
post:网络请求

<div id="search-holder"></div>

# search-holder

效果
![](https://img.bihacat.com/components/search-holder/338318AE706059DC0171D3C7E87AAFC6.jpg)

使用方法
![](https://img.bihacat.com/components/search-holder/7499521B9F49E5100B2EA04DDA2F3981.jpg)

|属性|类型|默认值|备注|
|---|---|---|---|
|text|string||显示在搜索图标后的文字|
|textcolor|string|#aaaaaa|搜索图标后文字的颜色|

|方法|备注|
|---|---|
|tap|点击搜索框的方法|

<div id="search-bar"></div>

# search-bar
效果
![](https://img.bihacat.com/components/search-bar/80811583895697_.pic.jpg)

使用方法
![](https://img.bihacat.com/components/search-bar/80801583895697_.pic.jpg)


|属性|类型|默认值|备注|
|---|---|---|---|
|placeholder|string||输入框的placeholder|
|value|string||输入框input的value|
|tintcolor|string|#2973FA|搜索按钮的颜色|
|textcolor|string|#333333|input的文字颜色|
|holdercolor|string|#aaaaaa|input的placeholder颜色|
|backgroundcolor|string|#EEF0F4|搜索框的背景色|
|focus|Boolean|false|是否焦点输入框|
|autofocus|Boolean|false|是否自动焦点输入框|

|方法|备注|
|---|---|
|input|文字输入时触发|
|focus|input焦点是触发|
|search|点击搜索和输入框回车时触发|
|clear|点击输入框清除按钮时触发|