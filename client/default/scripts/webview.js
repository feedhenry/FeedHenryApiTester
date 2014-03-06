function openWebview(type){

  var url = $('#webview_url').val();

  console.log("Open webview with url " + url);
  document.addEventListener("webviewUrlChange", function (e){
    var url = e.data;
    console.log("url to load is " + url);
  });

  var opts = {url:url, title: "", showTitleBar: true};
  if(type === 1){
    opts.x = 200;
    opts.y = 200;
    opts.width = 400;
    opts.height = 400;
  }

  $fh.webview(opts, function(result){
   console.log("Page " + result);
  }, function(err){
    alert("Error: " + err);
  });
}
