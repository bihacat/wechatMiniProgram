function formatUri(dataset) {
  let uri = dataset.uri + '?';
  for (const key in dataset) {
      if (key != 'uri') {
          uri += key + '=' + dataset[key] + '&'
      }
  }
  if (uri.substring(uri.length-1)=="&") {
    uri = uri.substring(0, uri.length-1)
  }
  return uri
}

/**
 * 使用wxml上的参数跳转页面, 例
 * wxml: <view bindtap="tapAction"></view>
 * js: tapAction(e){util.navigate(e)}
 * @param {Object} e - bindtap绑定函数的event,例如: tapAction(e){util.navigate(e)},直接将e传入即可
 */
function navigate(e) {
  let dataset = e.currentTarget.dataset;
  let uri = formatUri(dataset);
  wx.navigateTo({
      url: uri
  });
}

/**
 * 自定义参数跳转页面
 * @param {Object} params - 跳转时携带的参数,必须携带uri
 * @param {string} params.uri - 必须携带,要跳转的页面链接,例:"/pages/index/index"
 */
function navigateWithParam(params) {
  wx.navigateTo({
    url: formatUri(params),
  })
}

/**
 * 发送GET请求
 * @param {Object} options - 发送的参数
 * @param {string} options.uri - 请求的url
 * @param {string} options.data - 请求的参数
 */
function get(options) {
  wx.request({
    url: options.uri,
    data: options.data,
    method: 'GET',
    success: (result) => {
        options.success(result.data);
    },
    fail: () => {},
    complete: () => {},
  })
}

/**
 * 发送POST请求
 * @param {Object} info 发送的参数
 */
function post(info) {
  wx.request({
      url: info.uri,
      data: info.data,
      method: 'POST',
      success: (result)=>{
          info.success(result.data);
      },
      fail: ()=>{},
      complete: ()=>{
        wx.hideLoading();
      }
  });
}

/**
 * 判断是否是iPhone X/iPhone XS等带有下巴的iPhone手机
 */
function isIpx() {
    var systemInfo = wx.getSystemInfoSync();
    if (systemInfo.safeArea) {
        console.log(systemInfo.safeArea.top == 44 ? 'isIpx' : 'notIpx')
        if (systemInfo.safeArea.top == 44) {
            return true;
        }
    }
    return false;
}

module.exports = {
  formatUri,
  navigate,
  post,
  get,
  isIpx,
  navigateWithParam,
}

/**
 * 格式化时间戳
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}