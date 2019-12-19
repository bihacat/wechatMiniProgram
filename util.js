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
