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

function navigate(e) {
  let dataset = e.currentTarget.dataset;
  let uri = formatUri(dataset);
  wx.navigateTo({
      url: uri
  });
}

function post(info) {
  wx.request({
      url: info.uri,
      data: info.data,
      method: 'POST',
      success: (result)=>{
          info.success(result.data);
      },
      fail: ()=>{},
      complete: ()=>{}
  });
}

module.exports = {
  formatUri: formatUri,
  navigate: navigate,
  post: post,
}

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
