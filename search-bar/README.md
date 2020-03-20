# search-bar

**使用组件时，必须将common.wxss放于工程根目录下**

[下载地址](https://github.com/bihacat/wechatMiniProgram/releases)

### 效果

![](https://img.bihacat.com/components/search-bar/80811583895697_.pic.jpg)

### 使用方法

![](https://img.bihacat.com/components/search-bar/search-bar-code.png)

### 属性与方法

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